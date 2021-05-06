const { fetchBreedDescription } = require("./breedFetcher");
const breedName = process.argv.slice(2)[0];

fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    console.log(`Error fetch details:`, err);
  } else {
    console.log(desc);
  }
});
