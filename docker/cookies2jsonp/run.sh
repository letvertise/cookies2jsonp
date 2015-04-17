#!/usr/bin/env bash

/sbin/ip route|awk '/default/ { print $3 " dockerhost" }' >> /etc/hosts

node $APP_HOME/bin/www