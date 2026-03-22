# 🏗️ Operation "Wayne Manor" - Technical Execution Plan

**Objective:** Build a high-fidelity, client-side simulation of the **Australian Investment Manager** platform for the public marketing site.

**Strategy:** "Glass Box" (Full Transparency)
**Target:** `/demo` route on `myfamilyofficer-site`

---

## 1. The "Simulated Workspace" Architecture

Instead of connecting to a real backend (security risk), we will build a **"Headless Replica"**.
*   **Tech:** React (Client Components) + Zustand/Context (State Management).
*   **Data Source:** A static JSON file (`wayne-datasheet.json`) containing the entire "Wayne Family Office" state.
*   **Routing:** Virtual routing. usage of `?view=dashboard`, `?view=entities` query params to keep state shareable but client-side.

## 2. Key User Journeys to Simulate (Based on RAG_USER_JOURNEYS.md)

### A. The "Compliance Officer" Flow (RAG Intelligence)
*   **Trigger:** User types "dividend policy" into the top Search Bar.
*   **Simulation:**
    1.  The "Agent Terminal" slides up: `🔍 Searching 2,847 documents...`
    2.  Terminal logs: `📄 Reading 'Trust Deed 2014.pdf' (Clause 4.2)...`
    3.  Result: A structured answer citing the specific trust deed clause.
*   **Why:** Proves the "AI" isn't just a chatbot; it's a *document analyst*.

### B. The "Principals" Flow (Consolidated Wealth)
*   **Trigger:** User lands on `/demo`.
*   **Simulation:**
    *   **Dashboard:** A beautiful "Net Worth" sankey diagram (Assets -> Entities -> Beneficiaries).
    *   **Drill Down:** User clicks "Private Equity ($15M)" -> Sees "SpaceX Series B" -> Sees "Valuation History".
*   **Why:** Proves we handle complex, multi-entity structures (Trusts + Bucket Companies), not just simple portfolios.

### C. The "Accountant" Flow (Governance Automation)
*   **Trigger:** A "Critical Alert" badge on the Compliance tab.
*   **Simulation:**
    *   **Alert:** "Div 7A Loan Violation detected: $450,000 unsecured."
    *   **Agent Action:** Button "Draft Loan Agreement".
    *   **Result:** A realistic PDF preview of a compliant loan agreement is generated instantly.
*   **Why:** Showcases the "Australian Compliance Engine" (Div 7A management is a massive pain point).

## 3. The "Wayne Datasheet" (Synthetic Data Model)

We need to author a coherent fictional universe.
*   **Entities:**
    *   *The Wayne Family Trust* (Discretionary Trust)
    *   *Wayne Enterprises Pty Ltd* (Bucket Company)
    *   *Wayne SMSF* (Super Fund)
*   **Characters:**
    *   *Bruce Wayne* (Principal)
    *   *Alfred Pennyworth* (Appointor/Trustee)
*   **Assets:**
    *   *Wayne Manor* (Residential Property - High Value)
    *   *Gotham Tech Fund* (Private Equity)
    *   *ASX:WYN* (Public Equities)

## 4. Components Required (myfamilyofficer-site)

We will need to port/recreate simplified versions of these core components:
1.  `AppSidebar`: The main navigation (Entities, Assets, Compliance).
2.  `AgentTerminal`: The "Matrix-style" log viewer (Crucial for the "Glass Box" feel).
3.  `EntityGraph`: A visualization of the trust structure.
4.  `DocumentViewer`: A mock PDF viewer for the RAG demo.

## 5. Next Steps

1.  **Generate Data:** Create `data/wayne-datasheet.json`.
2.  **Scaffold Page:** Create `app/demo/page.tsx`.
3.  **Build Terminal:** Implement the "Agent Thinking" UI.

---
*Based on analysis of `aussie-investment-manager` repo.*
