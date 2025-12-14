#!/bin/bash

ENV="$1"

if [[ "$1" != "prod" && "$1" != "staging" ]]; then
	echo "Error: ENV must be either 'prod' or 'staging'" >&2
	exit 1
fi

echo -e "\033[1;33mDeploying for $ENV\033[0m"

. ./source.sh

tofu base apply -auto-approve

tofu "${ENV}" apply -auto-approve

FIREBASE_SITE_ID="$(tofu "${ENV}" output -raw firebase_site_id)"

firebase target:clear hosting "${ENV}"
firebase target:apply hosting "${ENV}" "${FIREBASE_SITE_ID}"

firebase deploy --only hosting:"${ENV}"