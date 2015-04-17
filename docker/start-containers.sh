#!/usr/bin/env bash

for port in 10201 10202 10203; do docker run -d -p 127.0.0.1:$port:3000 letvertise/cookies2jsonp ; done
