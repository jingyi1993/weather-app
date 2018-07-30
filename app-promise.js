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
geocodeURL = `http://maps.googleap.com/maps/api/geocode/json?address=${encodeAddress}`;


axios.get(geocodeURL)
.then((res)=>{
    console.log(JSON.stringify(res.data, undefined, 2))
})
.catch((e)=>{
    if(e.code ==='ENOTFOUND'){
        console.log("UNABLE!!!");
    }

})