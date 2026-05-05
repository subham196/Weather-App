import { useState } from "react";
import SearchBar from "./Searchbar";
import InfoBox from "./infoBox";
import "./herosection.css";

export default function HeroSection() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    temp: "",
    humidity: "",
    windSpeed: "",
    visibility: "",
    tempMax: "",
    tempMin: "",
    description: "",
    hourly: [],
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2>Get your latest weather update</h2>
        <SearchBar updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
