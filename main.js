var request = require('request');

request('http://toshi1.toshipci.dss:5000/api/v0/blocks', function (error, response, body) {
    
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
  else
  {
    console.log("error:");
    console.log(error);
  }
  
})