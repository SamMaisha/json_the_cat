const request = require('request');

// handle input from terminal

const arg = process.argv.slice(2);

const printCatBreed = function(breedID) {

  const urlDynamic = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedID;

  request(urlDynamic, (error, response, body) => {

    console.log('error: ', error);

    try {
      const data = JSON.parse(body);
      const description = data[0].description;
      console.log(description);

      console.log('status code: ', response.statusCode);

    } catch (error) {
      console.log('error: breed not found');
    }
  });
};

printCatBreed(arg);

