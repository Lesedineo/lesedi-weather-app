function handleSearchSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value; // Set the city element's text to the input value
} // Log the input value to the console
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
