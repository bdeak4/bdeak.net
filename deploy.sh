#!/bin/sh

BUCKET=bdeak.net
BUILD=build

set -e

aws s3 sync --delete $BUILD/ s3://$BUCKET

# pretty urls without .html extension
find $BUILD -name "*.html" -not -path $BUILD/index.html \
| while IFS= read -r file; do
  path="$(echo "$file" | sed "s/^$BUILD\///;s/.html$//")"
  aws s3 cp "$file" "s3://$BUCKET/$path" --content-type "text/html"
done

# invalidate cloudfront cache
id=$(aws cloudfront list-distributions --query "DistributionList.Items[?starts_with(Origins.Items[0].Id, '$BUCKET.s3')] | [0].Id" --output text)
aws cloudfront create-invalidation --distribution-id "$id" --paths "/*"