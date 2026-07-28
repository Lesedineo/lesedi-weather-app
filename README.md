# Weather App

A responsive weather application that provides real-time weather information and a 5-day forecast for any city in the world.

## Project Description

This weather app allows users to search for current weather conditions and forecasts for any city. The application displays detailed weather information including temperature, humidity, wind speed, and weather conditions. Users can easily switch between different cities using the search functionality.

## Features

- **Current Weather Display**: Shows real-time temperature, weather conditions, humidity, and wind speed
- **City Search**: Search any city to get its weather information
- **5-Day Forecast**: Displays weather forecast for the next 5 days
- **Weather Icons**: Visual representation of weather conditions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Default Location**: Loads Johannesburg weather on page load

## Languages & Technologies Used

### Frontend
- **HTML5**: Structure and markup
- **CSS3**: Styling and responsive design with backdrop blur effects
- **JavaScript (ES6)**: Core application logic and interactivity

### Libraries & Frameworks
- **Axios**: HTTP client for making API requests
- **SheCodes Weather API**: Real-time weather data and forecasts

## API Integration

This application uses the **SheCodes Weather API** for weather data:

- **Base URL**: `https://api.shecodes.io/weather/v1/`
- **Endpoints Used**:
  - `/current`: Fetches current weather data for a specified city
  - `/forecast`: Retrieves 5-day weather forecast data

### API Parameters
- `query`: City name to search for
- `key`: API authentication key
- `units`: Temperature units (metric for Celsius)

### Sample API Request
```
https://api.shecodes.io/weather/v1/current?query=London&key=YOUR_API_KEY&units=metric
```

### Data Retrieved
- Current temperature
- Weather condition description
- Humidity percentage
- Wind speed
- Weather condition icons
- Forecast data for upcoming days

## Project Structure

```
weather-app-1/
├── index.html          # Main HTML file
├── src/
│   ├── index.js        # JavaScript logic and API calls
│   └── style.css       # Styling and layout
└── README.md          # Project documentation
```

## How to Use

1. **Clone or Download** the project to your local machine
2. **Open** `index.html` in your web browser
3. **Default View**: The app loads with Johannesburg weather on startup
4. **Search**: Enter a city name in the search box and click "search" to get weather information
5. **View Forecast**: Scroll down to see the 5-day weather forecast

## Installation

No installation required! This is a pure front-end application. Simply:
1. Download the project files
2. Open `index.html` in any modern web browser

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The application is currently hosted on:
- **Website**: [Netlify](https://lesedi-weather-app.netlify.app/)
- **Source Code**: [GitHub Repository](https://github.com/Lesedineo/lesedi-weather-app)

## Author

**Lesedi Molale**
- GitHub: [@Lesedineo](https://github.com/Lesedineo)
- Project Repository: [lesedi-weather-app](https://github.com/Lesedineo/lesedi-weather-app)

## Future Enhancements

Potential features for future development:
- Temperature unit toggle (Celsius/Fahrenheit)
- Multiple language support
- Saved favorite cities
- Weather alerts
- Geolocation-based weather
- Dark/Light theme toggle

## License

This project is open source and available for educational purposes.

## Notes

- The API key used in this project should be kept secure and not exposed in production
- Consider moving the API key to a backend server for better security
- The app uses metric units by default (Celsius and km/h)
