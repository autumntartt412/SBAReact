import { useState, useEffect } from 'react';

// convert temp to °F
const convertToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
};

export function WeatherPage({ city, API_KEY }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );

          if (!response.ok) {
            throw new Error("City not found");
          }

          const data = await response.json();

          setWeather(data);
          setError(null);
        } catch (err) {
          setError("City not found");
          setWeather(null);
        }
      };
      fetchWeather();
    }
  }, [city]); 

  return (
    <>
      <h1>Weather Page</h1>
    
        <div>
          <h2>Today's Current Weather in {weather.name}</h2>
          <p>Temperature: {convertToFahrenheit(weather.main.temp).toFixed(1)}°F</p>
          <p>Feels Like: {convertToFahrenheit(weather.main.feels_like).toFixed(1)}°F</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <img
            src={`https://media2.giphy.com/media/l4v700AveiAd1yxTOp/giphy.webp?cid=ecf05e47jdo3djaj3qqrenxzc7018gjx6ugayca8c6btzymq&ep=v1_gifs_search&rid=giphy.webp&ct=g`}
            alt="weather condition icon"
          />
        </div>
     
    </>
  );
}



// https://openweathermap.org/
// fbedc48e7a192a0a6d8591add0ae7414

//`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=fbedc48e7a192a0a6d8591add0ae7414&units=metric