provider "google" {
  project = var.project_id
  region  = "us-central1"
}

provider "google-beta" {
  project = var.project_id
  region  = "us-central1"
}

resource "google_project_service" "firebase" {
  service = "firebase.googleapis.com"
}

resource "google_project_service" "hosting" {
  service = "firebasehosting.googleapis.com"
}

resource "google_project_service" "dns" {
  service = "dns.googleapis.com"
}

resource "google_firebase_project" "main" {
  provider = google-beta
  project = var.project_id
}

