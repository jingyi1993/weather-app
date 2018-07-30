
const request =require('request');

var geocodeAddress =(address) =>{
    return new Promise((resolve,reject)=>{
        request({
                url:`http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
                //???
                json: true,
            },
//call back function;
            (error,response, body)=>{
                if(error){
                    reject('unable to connect with google servers!');
                }
                else if(body.status==='ZERO_RESULTS'){
                    reject('unable to find that address!')
                }
                else if(body.status=== "OK"){
                    //can only resolve one argument!
                    resolve(
                        {
                        Address:body.results[0].formatted_address,
                        latitude:body.results[0].geometry.location.lat,
                        longitude:body.results[0].geometry.location.lng,
                    })

                    //     console.log(`Address: ${body.results[0].formatted_address}`);
                    //     console.log(`location: ${body.results[0].geometry.location.lat}`);
                    //     console.log(`location: ${body.results[0].geometry.location.lng}`)
                }


            });
    })}


geocodeAddress('1833 riverside dr').then((location)=>{

    console.log(JSON.stringify(location,undefined, 2))
    },
    (error)=>{
    console.log(error)
    });