locals {
	firebase_site_id = "senpailearn-staging-b29e5"
}

module "firebase" {
	source = "../../modules/firebase"
	project_id = "senpailearn-global"
	site_id = local.firebase_site_id
	dns_zone_name = "senpailearn-com"
	apex_domain = "staging.senpailearn.com"
	is_subdomain = true
}

output "firebase_site_id" {
	value = local.firebase_site_id
}