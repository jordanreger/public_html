#!/bin/sh

# Site specific settings
###################################################################################
DOMAIN="https://jordanreger.com"
TITLE="Jordan Reger"
DESCRIPTION="I ride bikes, make coffee, write code, and take photos."
COPYRIGHT="Copyright 2023, Jordan Reger"
AUTHOR="mail@jordanreger.com (Jordan Reger)"
OS="BSD" # "Linux" for Linux, "BSD" for BSD Systems (including MacOS)
HTML_LANG="en_US" # Your document (HTML) language setting

# Blog structure settings (most users should use these defaults)
###################################################################################
TOC=true
SYNTAX=true
PAGES_DIR="pages/"
POSTS_DIR="posts/"
PAGES=$(find $PAGES_DIR -type f)
POSTS=$(find $POSTS_DIR -type f)
WEB_HTML="blog/"
OUTPUT="_output/"
TIME="01:00:00 EST"
TTL="60"
