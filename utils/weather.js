//api key = a9ce8d4539d042e39b3191924240109


import axios from 'axios';

const fetchWeatherData = async (location) => {
  const results = await axios({
    method: 'get',
    url: 'https://api.weatherapi.com/v1/forecast.json',
    params: {
      key: 'a9ce8d4539d042e39b3191924240109', // Replace with your actual API key
      q: location,
      days: 10, // Only fetching today's data
      alerts: 'yes' // Request weather alerts
    }
  });

  return results.data;
};

export default async (location) => {
  const weatherData = await fetchWeatherData(location);
  return weatherData;
};
