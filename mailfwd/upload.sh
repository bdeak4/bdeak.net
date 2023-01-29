#!/bin/sh

cd $(dirname $0)

yarn
zip -r mailfwd.zip .
trap "rm mailfwd.zip && rm -r node_modules" EXIT

aws lambda update-function-code --function-name mailfwd --zip-file fileb://mailfwd.zip
