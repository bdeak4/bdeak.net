---
title: Static site deployment to AWS S3
---

This post will attempt to explain tools and methods used to deploy this very
website you are reading right now, but should be applicable to static website
built by eny static site generator or written by hand.

deploy.sh:

```
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
```

github action:

```
name: Static site deployment
on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: eu-central-1

      - name: Run deploy script
        run: ./deploy.sh
```
