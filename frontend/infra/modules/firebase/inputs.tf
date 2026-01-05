variable "project_id" {
	description = "GCP Project ID"
}

variable "site_id" {
	description = "Firebase hosting site ID"	
}

variable "dns_zone_name" {
	description = "GCP Managed DNS Zone Name"
}

variable "apex_domain" {
	description = "Apex domain for Firebase hosting (e.g. senpailearn.com)"
}

variable "is_subdomain" {
	description = "true if subdomain (e.g. x.y.com)"
	type = bool
}

variable "env" {
  description = "Environment name (e.g., PROD, STAGING)"
  validation {
    condition     = contains(["PROD", "STAGING"], var.env)
    error_message = "The env variable must be either 'PROD' or 'STAGING'."
  }
}

variable "github_repository" {
  description = "GitHub repository name in format 'owner/repo' (e.g., 'Yongbeom-Kim/spl')"
  type        = string
}