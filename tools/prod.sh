#!/bin/bash

command=$1
shift # to get rest in $@

function exit_usage() {
    echo "Usage: $0 build|service [args]"
    exit 1
}

if [ -z $command ]; then
    exit_usage
fi

BASE_CMD="docker compose --profile prod-server"

case $command in
    build)
        ./tools/npm.sh run build
        ;;

    generate)
        ./tools/npm.sh run generate
        ;;

    service)
        ${BASE_CMD} "$@"
        ;;

    *)
        exit_usage
        ;;
esac
