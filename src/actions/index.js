import axios from 'axios'

const API_KEY = "e14c98d61aec16a8b3fb1173106d7534";
const ROOT_URL='http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID='+API_KEY;


export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`
    // const url =`${ROOT_URL}&q={city},us`
    const request = axios.get(url);
    console.log("Request",request)
  return {
    type: FETCH_WEATHER,
    payload:request
  };
}
