// Node.js call API practice. Use axios
const axios = require('axios');

const url = "https://od.moi.gov.tw/api/v1/rest/datastore/A01010000C-000145-002";

axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });