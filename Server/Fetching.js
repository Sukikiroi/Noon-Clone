const { FayFetch } = require('fayfetch')
// or
const db = require("./Db-Config");



var body = {
    "username": "p39",
    "password": "password"
}
var params = {
    "param1": "param1",
    "param2": "param2",
}

var headers = {
    "header1": "header1"
}

//
const url = "http://localhost:2000"
const callback = (status, jsonData, ok) => {
    if (ok) {
        // Success
        console.log(jsonData);
    }
    else {
        // error
        console.log('error')
    }
}

//
 const Motionget=()=>{
    FayFetch.get(url, params, headers, callback);
}


//
// FayFetch.post(url, params, headers, body, callback);

// //
// FayFetch.put(url, params, headers, body, callback);

// //
// FayFetch.deletee(url, params, headers, callback);

// //
// FayFetch.upload(url, params, fileKeyString, fileObj, callback);

// //
// FayFetch.uploadUsingFormData(url, params, formData, callback);

module.exports = {
    Motionget,
  
  };