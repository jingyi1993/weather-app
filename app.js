const yargs =require('yargs');

const geocode =require('./geocode/geocode.js');

const weather =require('./weather/weather');
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

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage)
    }
    else{
        console.log('adress is :',results.Address);
        weather.getWeather(results.latitude, results.longitude ,(errorMessage, weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage)}
            else{
                console.log(`it is currently ${weatherResults.temperature}, it feels like ${weatherResults.apparentTemperature}`);
            }

        });

    }
});




