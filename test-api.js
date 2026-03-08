// test-api.js
import axios from 'axios';

const url = 'https://indigo-turkey-648648.hostingersite.com/api/website-content';

console.log(`Fetching ${url}...`);

try {
  const response = await axios.get(url, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  console.log('Status:', response.status);
  console.log('Data:', JSON.stringify(response.data, null, 2));
} catch (error) {
  console.error('Error fetching data:');
  if (error.response) {
    console.error('Status:', error.response.status);
    console.error('Headers:', error.response.headers);
    console.error('Data:', error.response.data); // This might show the PHP error
  } else if (error.request) {
    console.error('No response received:', error.request);
  } else {
    console.error('Error message:', error.message);
  }
}
