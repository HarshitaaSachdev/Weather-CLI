import ora from 'ora';
import getWeather from '../utils/weather.js';

export default async (args) => {
  const spinner = ora().start();

  try {
    const location = args.location || args.l;
    const weather = await getWeather(location);

    spinner.stop();

    console.log(`Current conditions in ${location}:`);
    console.log(`\t${weather.current.temp_c}°C ${weather.current.condition.text}`);

    // Display weather alerts
    if (weather.alerts && weather.alerts.alert.length > 0) {
      console.log('\nWeather Alerts:');
      weather.alerts.alert.forEach(alert => {
        console.log(`\tAlert: ${alert.headline}`);
        console.log(`\tDescription: ${alert.desc}`);
        console.log(`\tExpires: ${alert.expires}`);
      });
    } else {
      console.log('\nNo weather alerts at this time.');
    }
  } catch (err) {
    spinner.stop();
    console.error('Error fetching weather or alerts:', err.message);
  }
};
