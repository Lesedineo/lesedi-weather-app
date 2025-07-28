function refreshWeather(response) {
  let temperatureElement = document.querySelector('#temperature');
  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector('#city');

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiUrl =
    'https://api.shecodes.io/weather/v1/current?query=${city}&key=db5o125ffe7254a099d635f35et51cb4&units=metric ';
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let searchInput = document.querySelector('#search-form-input');

  searchCity(searchInput.value);
} // Log the input value to the console
let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener('submit', handleSearchSubmit);
