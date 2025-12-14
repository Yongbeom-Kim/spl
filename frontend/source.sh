#!/bin/bash

_get_tofu_dir() {
	if [[ "$1" != "prod" && "$1" != "staging" && "$1" != "base" ]]; then
		echo "Error: ENV must be either 'prod' or 'staging' or 'base'" >&2
		return 1
	fi
	echo "infra/envs/$1"
}

tofu() {
	TOFU_DIR="$(_get_tofu_dir "$1")"
	shift
	command tofu -chdir="${TOFU_DIR}" "$@"
}