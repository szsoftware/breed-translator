#!/bin/bash

WEBROOT=192.168.1.1

wget \
 --mirror \
 --page-requisites \
 --html-extension \
 --execute="robots=off" \
 --no-parent \
 http://$WEBROOT/

PAGES=$(cat 192.168.1.1/index.html | grep "var nav_str" | awk -F'"' '{print $2}' | tr "," "\n" | tr -d "/" | awk -F'|' '{print $1}')

for PAGE in $PAGES
do
 wget \
 --mirror \
 --page-requisites \
 --html-extension \
 --convert-links \
 --execute="robots=off" \
 --no-parent \
 http://$WEBROOT/$PAGE
done

for PAGE in $PAGES
do
 sed -i -e "s|/\([^,]*\.html\)|$(pwd)/$WEBROOT&|g" $WEBROOT/$PAGE
done

