#!/usr/bin/node
const argv = process.argv;
const fs = require('fs');
const fileName = argv[2];
fs.readFile(fileName, 'utf8', function (err, content) {
  if (err) {
    console.log(err);
  } else {
    console.log(content);
  }
});
