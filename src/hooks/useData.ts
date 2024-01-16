import  { useEffect, useState } from 'react'
import apiWeather from '../services/apiWeather';

const useData = (location: string) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
        const response = await apiWeather.get(`/forecast.json?key=7a2ed8bfacc04835a45144307240901&q=${location}&days=7&aqi=no&alerts=no`);
        setWeatherData(response.data);
    };
    fetchData();
  }, [location]);

  return weatherData;
};

export default useData;
