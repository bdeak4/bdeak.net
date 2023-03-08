#!/bin/sh

BUILD_CMD=./build.sh
BUILD=build
BUCKET=bdeak.net

set -e

trap 'rm -rf $BUILD' EXIT

$BUILD_CMD

aws s3 sync --delete $BUILD/ s3://$BUCKET

find $BUILD -name "*.html" -not -path $BUILD/index.html \
| while IFS= read -r file; do
  path="$(echo "$file" | sed "s/^$BUILD\///;s/.html$//")"
  aws s3 cp "$file" "s3://$BUCKET/$path" --content-type "text/html"
done

id=$(aws cloudfront list-distributions --query "DistributionList.Items[?starts_with(Origins.Items[0].Id, '$BUCKET.s3')] | [0].Id" --output text)
aws cloudfront create-invalidation --distribution-id "$id" --paths "/*"