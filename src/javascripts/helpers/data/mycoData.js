import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMycos = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologist.json`)
    .then((response) => {
      const mycosObjs = response.data;
      const mycos = [];
      Object.keys(mycosObjs).forEach((mycoId) => {
        mycosObjs[mycoId].id = mycoId;
        mycos.push(mycosObjs[mycoId]);
      });

      resolve(mycos);
    })
    .catch((err) => {
      console.error('something broke', err);
      reject(err);
    });
});

export default { getMycos };
