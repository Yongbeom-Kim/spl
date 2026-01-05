locals {
	firebase_site_id = "senpailearn-prod-b29e5"
}

module "firebase" {
	source = "../../modules/firebase"
	project_id = "senpailearn-global"
	site_id = local.firebase_site_id
	dns_zone_name = "senpailearn-com"
	apex_domain = "senpailearn.com"
	is_subdomain = false
	env = "PROD"
	github_repository = "Yongbeom-Kim/spl"
}

// Secret in GitHub Actions (secrets.FIREBASE_SITE_ID)
output "firebase_site_id" {
	value = local.firebase_site_id
}

// Secret in GitHub Actions (secrets.PROVIDER_NAME)
output "gh_oidc_provider_name" {
	value = module.firebase.gh_oidc_provider_name
}

// Secret in GitHub Actions (secrets.SA_EMAIL)
output "gh_oidc_service_account_email" {
	value = module.firebase.gh_oidc_service_account_email
}