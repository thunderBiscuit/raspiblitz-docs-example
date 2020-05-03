#!/usr/bin/env sh

# abort on errors
set -e

# build
vuepress build docs

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:<username>/<reponame>.git master:gh-pages

cd -
