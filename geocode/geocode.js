
const request =require('request');

// const argv = yargs
// //     .options({
// //     a:{
// //         demand:true,
// //         alias: 'address',
// //         describe: 'address to fetch weather for',
// //         string: true,
// //     }
// // })
//     .help()
//     .alias('help','h')
//     .argv;
// console.log(argv);
var geocodeAddress = (address, callback) =>{

    var encodeAddress = encodeURIComponent(address);
    request({
            url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
            //???
            json: true,
        },
//call back function;
        (error,response, body)=>{
            if(error){
                callback('unable to connect with google servers!');
            }
            else if(body.status==='ZERO_RESULTS'){
                callback('unable to find that address!')
            }
            else if(body.status=== "OK"){
                callback(undefined,{
                    Address:body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longitude:body.results[0].geometry.location.lng,
                })

            //     console.log(`Address: ${body.results[0].formatted_address}`);
            //     console.log(`location: ${body.results[0].geometry.location.lat}`);
            //     console.log(`location: ${body.results[0].geometry.location.lng}`)
            }


        });

};



module.exports.geocodeAddress = geocodeAddress;