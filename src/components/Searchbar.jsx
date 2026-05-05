import { useState } from "react";
import "./Searchbar.css";

export default function SearchBar({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_FORECAST = "https://api.openweathermap.org/data/2.5/forecast";

  const fetchWeatherData = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let data = await response.json();

      let forecastResponse = await fetch(`${API_FORECAST}?q=${city}&appid=${API_KEY}&units=metric`);
      let foreCastData = await forecastResponse.json();

      const hourly = foreCastData.list.slice(0, 8).map((item) => ({
        time: new Date(item.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        temp: Math.round(item.main.temp),
        icon: item.weather[0].main,
      }));

      let result = {
        city: city,
        temp: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        visibility: data.visibility,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        description: data.weather[0].description,
        hourly: hourly,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setError(false);
    try {
      let newInfo = await fetchWeatherData();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
    setCity("");
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSearch}>
        <div className="searchbar-content">
          <input
            className="search-input"
            type="text"
            placeholder="search for city"
            value={city}
            onChange={handleChange}
            required
          />
          <button className="search-button" type="submit">
            Search
          </button>
          {error && <p className="error-msg">City not found</p>}
        </div>
      </form>
    </div>
  );
}
