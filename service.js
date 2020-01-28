var request = require('request');

// technique du callback

// callback hell
// enfer
function listerClients(callbackFn) {

    request('https://paie-app.herokuapp.com/clients', { json: true }, function (err, res, data) {
        
        // 3
        callbackFn(data);
      
    });

}

exports.listerClients = listerClients;