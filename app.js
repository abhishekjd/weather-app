var yargs = require('yargs');
var geocode = require('./geocode/geocode.js');
var weather = require('./weather/weather.js');

var argv = yargs
    .option('a', {
        demand : true,
        alias : 'address',
        describe : 'Give the address of the location',
        type : 'string'
       }
    )
    .help()
    .argv
;

geocode.geocode(argv.address, (errorMessage, results)=> {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage){
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResults, undefined, 2));
            }
        });
}
});





