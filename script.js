const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '15fe89dc50mshdeae54f7c822646p1c8a32jsnf62a6369025a',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};

async function getWeather(city = 'Kolkata') {

  document.getElementById('cityname').innerHTML = city;

  const currentUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  const forecastUrl = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=1`;
  const astronomyUrl = `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${city}`;

  try {
   
    const currentRes = await fetch(currentUrl, options);
    const currentData = await currentRes.json();
    const current = currentData.current;

    document.getElementById('temp').innerText = current.temp_c + ' °C';
    document.getElementById('temp2').innerText = current.temp_c ;
    document.getElementById('feels_like').innerText = current.feelslike_c + ' °C';
    document.getElementById('humidity').innerText = current.humidity + '%';
    document.getElementById('humidity2').innerText = current.humidity ;
    document.getElementById('wind_degree').innerText = current.wind_degree + '°';
    document.getElementById('wind_speed').innerText = current.wind_kph + ' km/h';
    document.getElementById('wind_speed2').innerText = current.wind_kph ;


    const forecastRes = await fetch(forecastUrl, options);
    const forecastData = await forecastRes.json();
    const today = forecastData.forecast.forecastday[0].day;

    document.getElementById('min_temp').innerText = today.mintemp_c + ' °C';
    document.getElementById('max_temp').innerText = today.maxtemp_c + ' °C';

  
    const astronomyRes = await fetch(astronomyUrl, options);
    const astronomyData = await astronomyRes.json();
    const astro = astronomyData.astronomy.astro;

    document.getElementById('sunrise').innerText = astro.sunrise;
    document.getElementById('sunset').innerText = astro.sunset;

  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}


document.getElementById('submit').addEventListener("click", (e) => {
  e.preventDefault(); 
  const city = document.getElementById('city').value;
  getWeather(city);
});


getWeather();
