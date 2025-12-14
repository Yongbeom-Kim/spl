provider "google" {
  project = var.project_id
  region  = "us-central1"
}

provider "google-beta" {
  project = var.project_id
  region  = "us-central1"
}

resource "google_firebase_hosting_site" "main" {
  provider = google-beta
  project  = var.project_id
  site_id = var.site_id
}

data "google_dns_managed_zone" "main" {
  name     = var.dns_zone_name
}

resource "google_dns_record_set" "firebase_cname" {
  count        = var.is_subdomain ? 1 : 0
  name         = "${var.apex_domain}."
  type         = "CNAME"
  ttl          = 300
  managed_zone = data.google_dns_managed_zone.main.name
  rrdatas      = ["${google_firebase_hosting_site.main.site_id}.web.app."]
}

resource "google_dns_record_set" "apex_a" {
  count        = var.is_subdomain ? 0 : 1
  name         = "${var.apex_domain}."
  type         = "A"
  ttl          = 300
  managed_zone = data.google_dns_managed_zone.main.name
  rrdatas      = ["199.36.158.100"]
}

resource "google_dns_record_set" "apex_txt" {
  count        = var.is_subdomain ? 0 : 1
  name         = "${var.apex_domain}."
  type         = "TXT"
  ttl          = 300
  managed_zone = data.google_dns_managed_zone.main.name
  rrdatas      = ["\"hosting-site=${var.site_id}\""]
}

resource "google_firebase_hosting_custom_domain" "main" {
  provider = google-beta

  project  = var.project_id
  site_id = var.site_id
  custom_domain = var.apex_domain
  wait_dns_verification = false
}