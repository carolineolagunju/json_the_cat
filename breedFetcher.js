const request = require('request');


const breedFetcher = function() {
  //requesting the API
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    //check if there is error with the url
    if (error) {
      console.log(`Here is the error that occured,`, error);
    }

    if (response.statusCode !== 200) {
      console.log(`Things did not go well`);

    }
    //deserializing to a well structured object
    const data = JSON.parse(body);
    const dataDescription = data[0].description;
  
    //checking if the data does not exist
    if (data.length === 0) {
      console.log(`${breedName} breed does not exist`);
    } else {
      console.log(`Description: ${dataDescription}`);
    }
  });
};


const breedName = process.argv.slice(2);

breedFetcher();


module.exports = breedFetcher;