import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from '../components/google.map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => {
      //if you use{}, need return
      return weather.main.temp;
    });
    const humidity = cityData.list.map(weather => {
      //if you use{}, need return
      return weather.main.humidity;
    });
    const pressure = cityData.list.map(weather => {
      //if you use{}, need return
      return weather.main.pressure;
    });

    const lng =cityData.city.coord.lon;
    const lat =cityData.city.coord.lat;
    console.log("lon:"+lng)
    console.log("lat:"+lat)


    console.log(cityData);
    return (
      <tr key={name}>
        <td><GoogleMap  lat={lat} lng={lng} /></td>
        // width="225" height="200"
        <td width="250" height="200">
          <Chart data={temps} color="red" unit="K"/>
        </td>

        <td width="250" height="200">
          <Chart data={humidity} color="green" unit="hPa"/>
        </td>
        <td width="250" height="200">
          <Chart data={pressure} color="black" unit="%"/>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature(K)</th>
              <th>Pressure(hPa)</th>
              <th>Humidity(%)</th>
            </tr>
          </thead>

          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather
  }; //{weather} =={weather:weather}
}

export default connect(mapStateToProps)(WeatherList);
