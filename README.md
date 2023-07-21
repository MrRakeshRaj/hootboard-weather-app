# React Vite Weather App

User-friendly application that provides accurate weather information for any location worldwide. With a clean and intuitive interface, users can quickly check the current weather conditions, including temperature and humidity.

## Tech Stack
**React, Vite, Typescript, Tailwind CSS, Heroicons**

## Features
- Real-time Weather Data: The app retrieves weather information from a reliable weather API, ensuring that users get the most accurate and up-to-date data.
- Search Functionality: Users can easily search for weather information for any desired location, allowing them to stay informed about various places of interest.
- Responsive Design: The app is fully responsive and works seamlessly across different devices and screen sizes, providing a consistent user experience.
- User-Friendly Interface: The intuitive and visually appealing interface makes it easy for users to navigate and find the desired weather information effortlessly.
- Additional Weather Details: Along with the basic weather information, the app may include additional details such as temperature and humidity.

## Screenshots
1. HomePage
<img width="1440" alt="home" src="https://github.com/MrRakeshRaj/simple-weather-app/assets/76464379/d4c0778d-8071-43eb-bf35-d722318c8497">
2. Option Select
<img width="1440" alt="option-select" src="https://github.com/MrRakeshRaj/simple-weather-app/assets/76464379/6c077b85-599d-4560-af8c-5977b684f865">
3. Forecast
<img width="1440" alt="forecast" src="https://github.com/MrRakeshRaj/simple-weather-app/assets/76464379/305c2945-7707-4bb7-9eb3-a47e4d4fcd20">

## Screencast
![Video demo of the application ](https://github.com/MrRakeshRaj/simple-weather-app/assets/76464379/7e919ccd-b354-4b84-9a4f-9c23515ccc79)

## Deployment
View my deployment on Netlify => [Live Demo](https://vite-react-simple-weather-app.netlify.app).

## Setup
To run the Weather App locally on your machine, follow these steps:
1.	Make sure you have Node.js installed on your machine.
2.	Clone this repository or download the source code.
```
https://github.com/MrRakeshRaj/simple-weather-app.git
```
3. Open a terminal and navigate to the project directory.
```
cd simple-weather-app
```
4. Run the following command to install the project dependencies:
```
npm install
```
5. Obtain an API key:
- Sign up for an account on a weather API provider (e.g.OpenWeatherMap, Weatherbit, AccuWeather) prefarably OpenWeatherMap which is used in this project.
- Generate an API key.
6. Set up environment variables:
- Create a ‘ .env ‘ file in the root directory of the project.
- Add the following line to the .env file:
```
VITE_WEATHER_API_KEY = "YOUR_API_KEY"
```
7. Start the development server with the following command:
```
npm run dev
```
8. Open the app in your browser:
- Open http://localhost:5173/ in your preferred browser.
- The Weather App should now be running and accessible in your browser.

## Usage
- Upon opening the application, the user is presented with the current weather conditions for their current location.
- The user can search for weather information by entering a location in the search bar and pressing Enter or clicking the search button.
- The application fetches the weather data from the API and displays the current conditions.


## API
This app uses the [OpenWeatherMapAPI](https://openweathermap.org/) to fetch weather data. OpenWeatherMap provides a wide range of weather information, including current weather conditions, forecasts, and historical data. It offers various API endpoints and data formats to suit different needs.


## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


## License
This project is licensed under the [MIT License](https://github.com/MrRakeshRaj/simple-weather-app/blob/main/LICENSE).

