import axios from 'axios';

export default async () => {
  const results = await axios({
    method: 'get',
    url: 'https://api.ipdata.co?api-key=f5ca5a2e04caaed5ca55be75682325452e59d56faa2bdd7d1655884a', // Replace with your IPData API key
  });

  const { city, region } = results.data;
  return `${city}, ${region}`;
};
