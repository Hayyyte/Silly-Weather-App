require('dotenv').config();

function getWeather() {  

  const latitude = document.getElementById('latitudeValue').textContent;
  const longitude = document.getElementById('longitudeValue').textContent;
  
  // Enter your OpenWeatherMap API key here
  const apiKey = `API_KEY_HERE`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=zh_cn`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched data:', data);
      const weatherResult = document.getElementById('weatherResult');
      const cityName = data.name ? data.name : 'Unknown City';
      const country = data.sys && data.sys.country ? data.sys.country : 'Unknown Country';
      
      weatherResult.innerHTML = `
        <p>Temperature: ${data.main.temp}&#176;K</p>
        <p>Weather Description: ${data.weather[0].description}</p>
        <p>City: ${cityName}</p>
        <p>Country: ${country}</p>
      `;
    })
    .catch(error => {
      console.error('Error:', error);
      const weatherResult = document.getElementById('weatherResult');
      weatherResult.innerHTML = `<p>Error fetching weather data</p>`;
    });
}