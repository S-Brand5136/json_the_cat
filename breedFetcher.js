const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        return callback(error, null);
      }

      const formattedResponse = JSON.parse(body);

      if (formattedResponse.length <= 0 || response.statusCode !== 200) {
        return callback("Breed does not exsist", null);
      }

      return callback(null, formattedResponse[0].description);
    }
  );
};

module.exports = { fetchBreedDescription };
