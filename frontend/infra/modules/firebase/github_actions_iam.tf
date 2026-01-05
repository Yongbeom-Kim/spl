resource "google_service_account" "github_actions" {
  count = var.env == "PROD" ? 1 : 0
  account_id   = "gh-act-senpailearn-firebase"
  display_name = "Github Actions (SenpaiLearn Firebase)"
}

resource "google_project_iam_member" "github_actions_firebase_admin" {
  count  = var.env == "PROD" ? 1 : 0
  project = var.project_id
  role    = "roles/firebase.admin"
  member  = "serviceAccount:${google_service_account.github_actions[0].email}"
}

// https://github.com/terraform-google-modules/terraform-google-github-actions-runners/tree/main/modules/gh-oidc
module "gh_oidc" {
  count = var.env == "PROD" ? 1 : 0
  source      = "terraform-google-modules/github-actions-runners/google//modules/gh-oidc"
  project_id  = var.project_id
  pool_id     = "gh-act-senpailearn-firebase"
  provider_id = "gh-act-senpailearn-firebase"
  sa_mapping = {
    "gh-act-senpailearn-firebase" = {
      sa_name   = google_service_account.github_actions[0].name
      attribute = "attribute.repository/${var.github_repository}"
    }
  }
  attribute_condition = "assertion.repository == '${var.github_repository}'"
}