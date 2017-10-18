import React from "react";

class Weather extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        weather: null
      }

    this.getWeather = this.getWeather.bind(this);
  }


  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.getWeather)
  }

  getWeather(location){
    let url = 'http://api.openweathermap.org/data/2.5/weather?'
    let lat = location.coords.latitude;
    let long = location.coords.longitude;
    var params = new URLSearchParams();
    params.append('APPID', 'bb21f9a567653b6b7ef6ea6663497404');
    params.append('lat', lat);
    params.append('lon', long);

    fetch(url + params)
    .then((response) =>{
      return response.json()
    }).then((responseJson) => {
      this.setState({weather: responseJson})
      console.log(this.state.weather.weather)
    })
  }

  render(){

    if(this.state.weather){
      let weather = this.state.weather;
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      return(
        <div className="weather">
          <div>
            Location: {weather.name}
          </div>
          <div>
            Temp: {temp.toFixed(1)} Degrees
          </div>
          <div>
            Humidity: {weather.main.humidity}
          </div>
        </div>
      );
    } else {
      return(
        <div className="loading">
          Loading...
        </div>
      )
    }

  }

}

export default Weather;
