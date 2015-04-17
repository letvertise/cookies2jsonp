#!/usr/bin/env bash

cp -rfp ../app.js ../bin ../package.json ../public ../routes ../test ../views cookies2jsonp/

docker build -t letvertise/node node
docker build -t letvertise/cookies2jsonp cookies2jsonp
