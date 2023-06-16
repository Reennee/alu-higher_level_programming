#!/usr/bin/node
const request = require('request');
const baseUrl = 'https://swapi-api.alx-tools.com/api/films';
const id = process.argv[2];
request(`${baseUrl}/${id}`, function (err, response) {
  if (err) console.log(err);
  const result = JSON.parse(response.body);
  result.characters.forEach((character) => {
    request(character, (error, response) => {
      if (error) console.log(error);
      const people = JSON.parse(response.body);
      console.log(people.name);
    });
  });
});
