document.getElementById('input').addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    fetchdetail(e.target.value);
  }
})

const cityName = document.getElementById('city-name')
const weatherIcon = document.getElementById('weather-icon')
const temperature = document.getElementById('temperature')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('wind-speed')


function fetchdetail(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4cade129e112350c017571cb0623f28c&units=metric`)
  .then(data => {
    return data.json();
  })
  .then(data => {
    cityName.textContent = data.name
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    temperature.textContent = `${data.main.temp}°C`
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
  })
}