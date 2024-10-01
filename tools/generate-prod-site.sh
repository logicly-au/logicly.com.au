#!/bin/bash

set -e

# Used by GitHub Action to produce production site

##
# Init node env and dependencies.
##
echo "> Initialising Node and Dependencies"
./tools/npm.sh install


##
# Generate to output .output
#
# Nuxt build vs. generate
# https://stackoverflow.com/questions/71249845/nuxt-build-vs-generate
# https://dev.to/leamsigc/nuxt-build-vs-nuxt-generate-what-is-the-difference-759
#
# For production we use a completely static site, so we use generate.
##
echo "> Generating Nuxt prod static site"
./tools/prod.sh generate
