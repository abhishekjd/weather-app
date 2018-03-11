var request = require('request');

module.exports.geocode = (address, callback) => {
    request ({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address="+ encodeURIComponent(address)+"&key=AIzaSyA7X6LeZ9KnZt5c67r3jAY5kVhJbXjlazg",
        json: true
    }, function (error, response, body){
        if (error){
            callback('Unable to connect to Google Server');
        } else if (body.status === "ZERO_RESULTS"){
            callback("No such Zip Code Exist");
        } else if(body.status === "OK"){
            callback(undefined,{
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }

    });
}

