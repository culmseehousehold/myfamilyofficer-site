# ACM Certificate for CloudFront (Must be in us-east-1)
resource "aws_acm_certificate" "cert" {
  provider          = aws.us_east_1
  domain_name       = "wwwpreview.myfamilyofficer.com"
  validation_method = "DNS"

  subject_alternative_names = [
    "www1.myfamilyofficer.com",
    "wwwbeta.myfamilyofficer.com"
  ]

  lifecycle {
    create_before_destroy = true
  }
}

# CloudFront Distribution
# UNCOMMENT THIS BLOCK AFTER VALIDATING THE ACM CERTIFICATE
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.website.website_endpoint
    origin_id   = "S3-www.myfamilyofficer.com"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = [
    "www1.myfamilyofficer.com",
    "wwwbeta.myfamilyofficer.com",
    "wwwpreview.myfamilyofficer.com"
  ]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-www.myfamilyofficer.com"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

output "cloudfront_domain_name" {
    value = aws_cloudfront_distribution.s3_distribution.domain_name
}

output "acm_certificate_validation_records" {
    value = aws_acm_certificate.cert.domain_validation_options
}
