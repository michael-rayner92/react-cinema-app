#################################
# CLOUDFRONT RESOURCES
#################################

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
    domain_name = aws_s3_bucket.react_cinema_app_s3_bucket.bucket_regional_domain_name
    origin_id   = "default-origin"
  }

  enabled             = true
  retain_on_delete    = true
  is_ipv6_enabled     = true
  price_class         = "PriceClass_All"
  default_root_object = "index.html"
  comment             = "${terraform.workspace} environment for the ${var.project} app"

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "default-origin"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    min_ttl                = 0
    max_ttl                = 300
    default_ttl            = 300

    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }
  }

  custom_error_response {
    response_code         = 200
    error_caching_min_ttl = 300
    error_code            = 404
    response_page_path    = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  tags = local.common_tags
}
