import ora from 'ora';
import getWeather from '../utils/weather.js';
import getLocation from '../utils/location.js';

export default async (args) => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l || await getLocation();
    const weather = await getWeather(location);

    spinner.stop();

    if (weather && weather.forecast && weather.forecast.forecastday) {
      console.log(`10-Day Forecast for ${location}:`);
      weather.forecast.forecastday.forEach((day) => {
        console.log(`\t${day.date} - Low: ${day.day.mintemp_c}°C | High: ${day.day.maxtemp_c}°C | ${day.day.condition.text}`);
      });
    } else {
      console.error('Forecast data is not available.');
    }
  } catch (err) {
    spinner.stop();
    console.error('Error:', err.message);
  }
};
