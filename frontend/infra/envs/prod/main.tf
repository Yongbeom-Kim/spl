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
}

output "firebase_site_id" {
	value = local.firebase_site_id
}