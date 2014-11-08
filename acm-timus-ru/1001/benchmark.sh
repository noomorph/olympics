#!/bin/bash

echo RUBY
time (cat 1001.in | ruby 1001.rb) >/dev/null
echo

echo D8
time (cat 1001.in | d8 1001.js) >/dev/null
echo

echo SPIDERMONKEY
time (cat 1001.in | spidermonkey 1001.js) >/dev/null
echo

echo SPIDERMONKEY ES6
time (cat 1001.in | spidermonkey 1001-es6.js) >/dev/null
echo
