const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  //requesting the API
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    //check if there is error with the url
    if (error) {
      callback(error, null);
      return;
    }

    //deserializing to a well structured object
    const data = JSON.parse(body);
  
    //checking if the data does not exist
    if (data.length === 0) {
      callback(`${breedName} breed does not exist`, null);
      return;
    }

    const dataDescription = data[0].description;
    callback(null, dataDescription);
  });
};


module.exports = {fetchBreedDescription};