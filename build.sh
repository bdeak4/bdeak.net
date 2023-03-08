#!/bin/sh

SOURCE=src
BUILD=build

set -e

rm -rf $BUILD
cp -r $SOURCE $BUILD

find $BUILD -name "*.md" \
| while IFS= read -r file; do
  moddate="$(git log -1 --pretty="format:%as" $SOURCE/"${file#"$BUILD/"}")"
  pandoc "$file" -o "${file%.md}".html --template layout.html --toc \
    --metadata moddate="$moddate"
done