var request = require('request');


var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/a4f9991def4dfdbfeec62914a8f3df31/${latitude},${longitude}`,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature
            });git
        } else {
            callback('Unable to connect to servers');
        }
    });

}

module.exports.getWeather = getWeather;
