import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {

    state = {
        input: '',
        lat: '',
        lng: '',
        temperature:'',
        apparentTemperature:'',

    };

    valueChangeHandler = (event) => {


        this.setState({input: event.target.value})};

    submitLocationHandler =() =>{
        const location = this.state.input;
        console.log(location);
        const encodeAddress = encodeURIComponent(location);
        console.log(encodeAddress);
        let geocodeURL = `http://www.mapquestapi.com/geocoding/v1/address?key=moCEAVVYlYwrXPnwpARArHVTtZgkqaoy&location=${encodeAddress}`;

        axios.get(geocodeURL)
            .then((res)=>{
                if(res.data.status==='ZERO_RESULTS'){
                    throw new Error('Unable to find that address!!!')
                }
                console.log('~~~~',res.data.result);

                var lat = res.data.results[0].locations[0].latLng.lat;
                // this.setState({lat: lat});

                var lng = res.data.results[0].locations[0].latLng.lng;
                // this.setState({lng: lng});
                var address = res.data.results[0].formatted_address;
                var weatherUrl = `https://api.darksky.net/forecast/2baefed1fc393dd8598e0f8c2db15317/${lat},${lng}`;
                console.log(JSON.stringify(address));
                return axios.get(weatherUrl)
            })
            .then((res)=>{
                var temperature = res.data.currently.temperature;
                this.setState({temperature: temperature});
                var apparentTemperature = res.data.currently.apparentTemperature;
                // this.setState({apparentTemperature: apparentTemperature});
                console.log(`it is currently ${temperature}, it feels like ${apparentTemperature}`)
            })
            .catch((e)=>{
                    if(e.code ==='ENOTFOUND'){
                        console.log("unable to connect to API servers!!!");
                    }else{
                        console.log(e.message)
                    }
                }

            );


    };




        render(){
            let temperature = this.state.temperature;
            console.log(this.state.temperature);


            return (
                <div>
                    <input type="text" name='name' placeholder='your name' value={this.state.input}
                           onChange={this.valueChangeHandler} />
                    {/*<input  onChange={this.valueChange}> </input>*/}

                    <p>
                        it is currently {temperature}
                    </p>

                    <button onClick={this.submitLocationHandler}> submit</button>
                </div>

            )
        }

}

export default App;
