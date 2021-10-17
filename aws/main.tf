provider "aws" {
  region = "ap-southeast-2"
}

terraform {
  backend "s3" {
    bucket  = "react-cinema-app-tf-state"
    key     = "react-cinema.tfstate"
    region  = "ap-southeast-2"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Michael Rayner"
  }
}
