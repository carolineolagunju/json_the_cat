const request = require('request');


const breedFetcher = function() {
  //requesting the API
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {

    //check if there is error with the url
    if (error) {
      console.log(`Here is the error that occured,`, error);
    }

    if (!response) {
      console.log(`Things did not go well`);

    }
    //deserializing to a well structured object
    const data = JSON.parse(body);
    const dataDescription = data[0].description;
  
    if (!data.includes(data[0])) {
      console.log(`Breed does not exist`);
    } else {
      console.log(`${dataDescription}`);
    }
  });
};

const args = process.argv.slice(2);
breedFetcher();


module.exports = breedFetcher;