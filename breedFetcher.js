const request = require("request");

const userSearch = process.argv.slice(2)[0];

if (!userSearch) {
  return console.log("What?! You didn't want to learn about cat breeds?!");
}

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${userSearch[0]}`,
  (error, response, body) => {
    if (error) {
      return console.log("Error! Cat breed not found! \n" + error);
    }

    const formattedResponse = JSON.parse(body);

    if (formattedResponse.length <= 0) {
      return console.log("Uh oh that cat breed was not found!");
    }

    console.log(formattedResponse[0].description);
  }
);
