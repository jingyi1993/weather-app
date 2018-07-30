
const request =require('request');

var getWeather =(lat,lgn, callback) =>{
    request({
            url:`https://api.darksky.net/forecast/2baefed1fc393dd8598e0f8c2db15317/${lat},${lgn}`,
            json: true,
        },
        (error,response,body)=> {
            if(!error && response.statusCode===200){
                callback(undefined,{
                    temperature:body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature,
                })
            }
            else{
                callback('unable to fetch weather!!!!!');
            }
        })
};

module.exports.getWeather = getWeather;
