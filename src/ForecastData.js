import {useState} from 'react';
import axios from 'axios';

const ForecastData = () => {

  const URL = 'http://www.metaweather.com/api/location';
  const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
  const REQUEST_URL = `${CROSS_DOMAIN}/${URL}`;
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false)
  const [forecast, setForecast] = useState(null);

  const getWoeid = async (location) =>{
    const { data }  = await axios(`${REQUEST_URL}/search`, { params: { query: location }});
    console.log(data);

    if(!data || data.length === 0) {
        setError('Location not found');
        setLoading(false);
        return {};
      }
      return data[0];
  }

  const WeatherData = async (woeid) => {
      const { data } = await axios(`${REQUEST_URL}/${woeid}`);
      console.log(data);
      if (!data || data.length === 0) {
      setError('Something went wrong, please try again');
      setLoading(false);
      return {};
    }
    return data;
  }

  const submit = async (location) => {
    setError(false);
    setLoading(true);
    const response = await getWoeid(location);
    if (!response?.woeid) return;
    const data = await WeatherData(response.woeid);
    if (!data) return;
    console.log(data);
    setForecast(data);
    // setLoading(false); 
  };

  return {
    isError,
    forecast,
    submit,
    isLoading,
  };
}

export default ForecastData