// scripts/screenshot-tour.mjs
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// Resolve directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const TOUR_DATA_PATH = path.join(PROJECT_ROOT, 'lib/tour-data.json');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'public/images/tour');

// Configuration - Load from env or defaults
const BASE_URL = process.env.APP_URL || 'http://localhost:3000';
const USERNAME = process.env.TOUR_USERNAME;
const PASSWORD = process.env.TOUR_PASSWORD;
const BYPASS_AUTH = process.env.BYPASS_AUTH === 'true'; // e.g. using PLAYWRIGHT_TEST_BYPASS cookie
const INTERACTIVE = process.env.INTERACTIVE === 'true'; // Enable headful mode for manual login
const MANUAL_STEPS = process.env.MANUAL_STEPS === 'true'; // Wait for user confirmed before each snap
const USE_EXISTING_AUTH = process.env.USE_EXISTING_AUTH === 'true'; // Path to storageState.json
const STORAGE_STATE_PATH = path.join(PROJECT_ROOT, 'scripts/auth.json');

const waitForUser = (msg) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise(resolve => {
     console.log(`\n\x1b[36m🎬 ACTION REQUIRED:\x1b[0m ${msg}`);
     rl.question(`👉 Press ENTER to capture...`, () => {
      rl.close();
      resolve();
    });
  });
};

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  console.log('🚀 Starting Tour Screenshot Generator');
  console.log(`Target: ${BASE_URL}`);

  // Load tour data
  const tourFileContent = fs.readFileSync(TOUR_DATA_PATH, 'utf8');
  // Handle potential export default syntax often found in JS/TS files if not purely JSON
  let tourData;
  try {
      tourData = JSON.parse(tourFileContent);
  } catch (e) {
      // Very basic fallback if file contains JS object literal syntax instead of JSON
      // But given we generated it as .json it should be valid
      console.error("Failed to parse tour data JSON", e);
      process.exit(1);
  }
  
  console.log(`Found ${tourData.length} stops in the tour.`);
  
  // Calculate total steps
  const totalSteps = tourData.reduce((acc, stop) => acc + (stop.steps ? stop.steps.length : 0), 0);
  console.log(`Total Steps in Tour: ${totalSteps}`);
  let currentStepCounter = 0;

  // Launch Options
  const launchOptions = {
      headless: !INTERACTIVE && !MANUAL_STEPS,
      args: ['--disable-blink-features=AutomationControlled'], // Helps with Google Auth detection
      ignoreDefaultArgs: ['--enable-automation'], // Removes the "Chrome is being controlled by automated test software" bar
  };
  
  // Try to use installed Chrome if available for better auth compatibility, else default to bundled Chromium
  // try {
  //     launchOptions.channel = 'chrome'; 
  // } catch (e) {}

  const browser = await chromium.launch(launchOptions);
  
  // Context Options
  const contextOptions = {
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2, // Retina screenshots look better
  };

  // Load auth state if exists and requested
  if (USE_EXISTING_AUTH && fs.existsSync(STORAGE_STATE_PATH)) {
      console.log('🔓 Loading saved authentication state...');
      contextOptions.storageState = STORAGE_STATE_PATH;
  }

  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();

  // Set bypass cookie if configured (useful for local dev without login)
  if (BYPASS_AUTH) {
    console.log('🍪 Setting bypass auth cookie...');
    await context.addCookies([{
      name: 'playwright-test-bypass',
      value: 'true',
      domain: new URL(BASE_URL).hostname,
      path: '/'
    }]);
  }

  // Pre-Snap Setup Phase (Manual)
  if (MANUAL_STEPS) {
      console.log('👋 Manual Mode Enabled');
      console.log('   The browser is open. Please log in and navigate to the dashboard.');
      console.log('   (If you are using Google Auth, do this now in the opened browser window)');
      await page.goto(BASE_URL);
      await waitForUser('Setup Complete? Press ENTER to start capturing screenshots...');
  }


  // Interactive Login Mode
  if (INTERACTIVE) {
      console.log('👋 Interactive Mode: Please log in manually in the browser window.');
      await page.goto(BASE_URL);
      
      // Wait for user to navigate to dashboard or a specific authenticated verify element
      // For now, let's just wait for console input to proceed
      console.log('⏳ Waiting for you to log in... Press functionality not implemented in non-TTY.');
      console.log('⏳ Instead, will wait for URL to NOT look like login page (e.g. contain "dashboard" or rely on a 60s timeout)');
      
      try {
        await page.waitForURL('**/dashboard**', { timeout: 60000 }); // Adjust based on actual post-login URL
        console.log('✅ Detected navigation to dashboard!');
        
        // Save storage state for future runs
        await context.storageState({ path: STORAGE_STATE_PATH });
        console.log(`💾 Saved authentication state to ${STORAGE_STATE_PATH}`);
        
      } catch (e) {
          console.warn('⚠️ Timed out waiting for dashboard. Continuing anyway (maybe already logged in?)');
      }
  } else if (!BYPASS_AUTH && !USE_EXISTING_AUTH) {
    if (USERNAME && PASSWORD) {
        console.log('🔐 Attempting automated login...');
        try {
            await page.goto(`${BASE_URL}/auth/signin`); // Adjust login path if needed
            await page.fill('input[name="email"]', USERNAME); // Adjust selectors
            await page.fill('input[name="password"]', PASSWORD);
            await page.click('button[type="submit"]');
            await page.waitForURL('**/', { timeout: 10000 });
            console.log('✅ Login successful');
        } catch (e) {
            console.error('❌ Login failed:', e.message);
        }
    }
  }

  // Iterate stops
  for (const stop of tourData) {
    console.log(`📸 Processing Stop: ${stop.title} (${stop.id})`);
    
    // Construct target URL safely
    const targetUrl = new URL(stop.path || '/', BASE_URL).toString();
    
    try {
        await page.goto(targetUrl, { waitUntil: 'networkidle' });
        
        // Hide sensitive elements or cleanup UI if needed
        // await page.addStyleTag({ content: '.sensitive-data { filter: blur(4px); }' });
        
        // Wait for data loading if needed
        await page.waitForTimeout(2000); 

        // Snapshot Logic
        // Capture ONE screenshot per Stop (Card), not per Step.
        // This reduces the burden from ~160 screenshots to ~50.
        
        const imageFilename = `${stop.id}.png`;
        const outputPath = path.join(OUTPUT_DIR, imageFilename);
        
        // Allow manual setup per stop
        if (MANUAL_STEPS) {
            currentStepCounter++; // Tracks Stops now, not sub-steps
            const separator = `------------------------------------------------------------`;
            const promptMsg = `\n${separator}\n` +
                `📸 PROGRESS: Stop ${currentStepCounter}/${tourData.length}\n` +
                `📍 PAGE: ${stop.title} (${stop.path})\n` +
                `${separator}\n` +
                `This stop covers ${stop.steps ? stop.steps.length : 0} steps:\n` +
                (stop.steps ? stop.steps.map(s => ` - ${s.title}`).slice(0, 3).join('\n') + (stop.steps.length > 3 ? '\n   ...' : '') : '') +
                `\n\n\x1b[33mAction:\x1b[0m Navigate/Configure UI for this page view.`;
            
            await waitForUser(promptMsg);
        } else {
             console.log(`📸 Processing Stop: ${stop.title} (${stop.id})`);
        }
        
        try {
            await page.screenshot({ path: outputPath, fullPage: false });
            console.log(`   Saved: ${imageFilename}`);
        } catch (e) {
             console.error(`   ❌ Failed to capture ${stop.title}:`, e.message);
        }
    } catch (err) {
        console.error(`💥 Failed to process ${stop.title}:`, err.message);
    }
  }
  
  await browser.close();
  console.log('✨ All done!');
}

run().catch(console.error);
