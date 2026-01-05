output "gh_oidc_provider_name" {
	value = module.gh_oidc[0].provider_name
}

output "gh_oidc_service_account_email" {
	value = google_service_account.github_actions[0].email
}