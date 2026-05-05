import "./Forecast.css";

const ICONS = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
  Haze: "🌫️",
  Fog: "🌫️",
};

export default function Forecast({ hourly }) {
  return (
    <div className="forecast">
      <p>24 hours weather forecast</p>
      <div className="forecast-content">
        {hourly.map((item, index) => (
          <div key={index} className="hourly-items">
            <span className="hourly-icons">{ICONS[item.icon]}</span>
            <span className="hourly-time">{item.time}</span>
            <span className="hourly-temp">{item.temp}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
}
