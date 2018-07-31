const yargs =require('yargs');
const axios =require('axios');

const argv = yargs
//     .options({
//     a:{
//         demand:true,
//         alias: 'address',
//         describe: 'address to fetch weather for',
//         string: true,
//     }
// })
    .help()
    .alias('help','h')
    .argv;
console.log('!!!!!',argv);

var encodeAddress = encodeURIComponent(argv.address);
geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;


axios.get(geocodeURL)
.then((res)=>{
    if(res.data.status==='ZERO_RESULTS'){
        throw new Error('Unable to find that address!!!')
    }

    var lat = res.data.results[0].geometry.location.lat;
    var lng = res.data.results[0].geometry.location.lng;
    var address = res.data.results[0].formatted_address;
    var weatherUrl = `https://api.darksky.net/forecast/2baefed1fc393dd8598e0f8c2db15317/${lat},${lng}`;
    console.log(JSON.stringify(address));
    return axios.get(weatherUrl)
})
    .then((res)=>{
        var temperature = res.data.currently.temperature;
        var apparentTemperature = res.data.currently.apparentTemperature;
        console.log(`it is currently ${temperature}, it feels like ${apparentTemperature}`)
    })
.catch((e)=>{
    if(e.code ==='ENOTFOUND'){
        console.log("unable to connect to API servers!!!");
    }else{
        console.log(e.message)
    }
    }

)

