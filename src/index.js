function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#icon");

  timeElement.innerHTML = formatDate(date);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity + "%";
  windSpeedElement.innerHTML = response.data.wind.speed + "km/h";
  temperatureElement.innerHTML = Math.round(temperature);
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

  getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = date.getDay();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${days[day]} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "db5o125ffe7254a099d635f35et51cb4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "db5o125ffe7254a099d635f35et51cb4";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayforecast);
}

function displayforecast(response) {
  console.log(response.data);

  let forecastHtml = "";
  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        ` <div class="weather-forecast-day">
            <div class="forecast-day">${formatDay(day.time)}</div>
            
            <img src="${day.condition.icon_url}" class="forecast-icon" />
            
            <div class="forecast-temperature">
              <div class="forecast-temp">
                <strong>${Math.round(day.temperature.maximum)}°</strong>
              </div>
              <div class="forecast-temp">${Math.round(
                day.temperature.minimum
              )}°</div>
            </div>
          </div>`;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");
