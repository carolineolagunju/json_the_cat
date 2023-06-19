const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {

  if (error) {
    console.log('Error fetch details:', error);
  }
  if (description) {
    console.log(`Description: `, description);
  }
});