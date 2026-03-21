provider "aws" {
  region = "ap-southeast-2" # Sydney Region for Data Sovereignty
}

resource "aws_dynamodb_table" "leads" {
  name           = "FamilyOfficerLeads"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "email"
  range_key      = "timestamp"

  attribute {
    name = "email"
    type = "S"
  }
  attribute {
    name = "timestamp"
    type = "S"
  }
}

data "archive_file" "lambda_zip" {
  type        = "zip"
  source_file = "${path.module}/lambda/index.py"
  output_path = "${path.module}/lambda.zip"
}

resource "aws_iam_role" "iam_role_for_lambda" {
  name = "iam_role_for_lambda"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_policy" "lambda_policy" {
  name        = "lambda_policy"
  path        = "/"
  description = "IAM policy for logging from a lambda"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "dynamodb:PutItem",
        "dynamodb:UpdateItem",
        "dynamodb:DeleteItem",
        "dynamodb:GetItem",
        "dynamodb:Scan",
        "dynamodb:Query"
      ],
      "Resource": "${aws_dynamodb_table.leads.arn}",
      "Effect": "Allow"
    },
     {
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*",
      "Effect": "Allow"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "attach_iam_policy_to_iam_role" {
  role       = aws_iam_role.iam_role_for_lambda.name
  policy_arn = aws_iam_policy.lambda_policy.arn
}

resource "aws_lambda_function" "lead_capture" {
  filename      = data.archive_file.lambda_zip.output_path
  function_name = "FamilyOfficerLeadCapture"
  role          = aws_iam_role.iam_role_for_lambda.arn
  handler       = "index.handler"
  runtime       = "python3.9"
  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.leads.name
    }
  }
  timeout = 10
}

# Add Lambda Function URL (Public Endpoint)
resource "aws_lambda_function_url" "fn_url" {
  function_name      = aws_lambda_function.lead_capture.function_name
  authorization_type = "NONE"

  cors {
    allow_origins     = ["*"]
    allow_methods     = ["POST"]
    allow_headers     = ["date", "keep-alive", "content-type", "access-control-allow-headers"]
    expose_headers    = ["keep-alive", "date"]
    max_age           = 86400
  }
}

output "function_url" {
  value = aws_lambda_function_url.fn_url.function_url
}