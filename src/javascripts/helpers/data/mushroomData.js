import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMushrooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mushrooms.json`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getMushroomById = (mushroomId) => axios.get(`${baseUrl}/mushrooms/${mushroomId}.json`);

const deleteMushroom = (mushroomId) => axios.delete(`${baseUrl}/mushrooms/${mushroomId}.json`);

const addMushroom = (newMushroomObj) => axios.post(`${baseUrl}/mushrooms.json`, newMushroomObj);

const updateMushroom = (mushroomId, editedMushroom) => axios.put(`${baseUrl}/mushrooms/${mushroomId}.json`, editedMushroom);

export default {
  getMushrooms,
  getMushroomById,
  deleteMushroom,
  addMushroom,
  updateMushroom,
};

// we are getting the data for mushroom depending upon our usage.
// Firebase has the api endpoint to get particular mushroom or Mycologist from Database
// So we dont have to do the logic by getting all the data from database once and then
// going through all the collection and picking the one you need
// Or you can do it with firebase api which is easier and very straightforward
// thats why we are using approach here

// Promises: New promise is just a function, which takes basically a anonymous function as a parameter and that anonymous function takes two functions as a parameter
// one to run when you have success and other to run when you have a failure.
// You don't have to use or run these functions it is completely based on your need

// In this particular case we are running the axios function and then based on the success and failure of the axios function
// we are using the resolve and reject

// in this case we are mixing the promise from both side one we are consuming a promise as well as making ourown new promise
// and based on the results of axios promise we are attaching our promises succes and failure
// If we get success from the axios promise we are resolving our promise
// viceversa if axios promise returning a error we are catching that and then running the error

// THere are 4 things to consider when you are buildig your on promise
// it is a function
// it takes a anonymous function as paramenter
// and that anonymous function takes two functions as a parameter resolve and reject
// based on the logic you can resolve or reject

// on the consuming the promises
// You need the run the promise e.g. in mushroomList.js we are consuming our promise
// mushroomData.getMushrooms() but we are adding a .then() and .catch() to apply our success or failure logic
// printToDom if its a success or console.error if failure

// it is not mandatory to run the .then()  or .catch() if you dont have to it simply returns the results

// in example above we have are using axios promise two different ways one by adding the .then() and .catch()
// we are formating the respose in .then() and then resolving our own promise there if we didnt need to formate the data we would not have to run the .then() or .catch here
// we could have used it like below example running axios without .then and .catch

// and other is simply if you want to get a single mushroom which does not require to manipulate the response data
// const getSingleMushroom = (mushroomId) => {axios.get(`${baseUrl}/mushrooms/${mushroomId}.json`)};
// and then further use this response in smash.js as following

// mycologistData.getMycologistById(mycologistId)
//    .then((response) => {const mycologist = response.data; and then print to Dom or do whatever .......logic based on success})
//    .catch((err) => reject(err));

// in smash.js we are accumulating all the catch blocks in to a single catch block at the end
// thats why we have three .thens and only one .catch

// To delete the mushroom from firebase you just use .delete method of the axios and it returns promise based on success or failure
