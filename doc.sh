#!/usr/bin/env bash
npm run doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "update"
git push
git checkout -
