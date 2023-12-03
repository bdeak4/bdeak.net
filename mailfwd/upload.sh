#!/bin/sh

cd "$(dirname "$0")" || exit
yarn
zip -r mailfwd.zip .
aws lambda update-function-code --function-name mailfwd --zip-file fileb://mailfwd.zip
