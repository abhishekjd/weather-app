var yargs = require('yargs');
var axios = require('axios');

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

var addressUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+ encodeURIComponent(argv.address)+"&key=AIzaSyA7X6LeZ9KnZt5c67r3jAY5kVhJbXjlazg";

axios.get(addressUrl).then((response)=> {
    console.log(response.data);
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/a4f9991def4dfdbfeec62914a8f3df31/${latitude},${longitude}`;
    return axios.get(weatherUrl);
}).then((response) => {
    console.log(response.data.currently.temperature);
}).catch((e)=>{
    console.log(e);
})
