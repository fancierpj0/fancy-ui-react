#!/usr/bin/env bash
npm run doc
git checkout gh-pages
mv -f doc/* ./
git add -A
git commit -m "update"
git push
git checkout master
