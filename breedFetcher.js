const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  const breedID = breedName.slice(0, 4);

  const urlDynamic = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedID;

  request(urlDynamic, (error, response, body) => {

    const data = JSON.parse(body);
    const description = data[0].description;

    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `could not retrieve breed information. ${response.statusCode}`;
      callback(Error(msg), null);
      return;
    }

    callback(null, description);

  });
};

module.exports = { fetchBreedDescription };

