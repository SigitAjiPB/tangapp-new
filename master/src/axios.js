const axios = require('axios');

const url = 'http://localhost:7878/v1/users/';
const data = {
  username: 'user',
  password: 'pass',
};

axios.post(url, data, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error.message));
