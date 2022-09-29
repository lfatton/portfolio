#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist
git init
git branch -m main
git add -A
git commit -m 'deploy'
git push -f git@github.com:lfatton/lfatton.github.io.git main
cd -