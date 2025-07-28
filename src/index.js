function searchCity(city) {
  let apiKey = "db5o125ffe7254a099d635f35et51cb4";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
} // Log the input value to the console
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
