#!/usr/bin/node
const list = require('./100-data').list;
const arr = (value, index) => value * index;
const newlist = list.map(arr);
console.log(list);
console.log(newlist);
