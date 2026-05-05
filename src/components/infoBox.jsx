import Forecast from "./Forecast";
import "./infoBox.css";

export default function InfoBox({ info }) {
  return (
    <div className="weather-card">
      <div className="top-section">
        <div>
          <span>{info.city}</span>
          <p className="weather-type">{info.description}</p>
        </div>
        <div className="temp">{info.temp}°C</div>
      </div>

      <div className="info-content">
        <div className="card-item">
          💧 <span>Humidity</span>
          <p>{info.humidity}%</p>
        </div>
        <div className="card-item">
          🌬️ <span>Wind</span>
          <p>{info.windSpeed} m/s</p>
        </div>
        <div className="card-item">
          👁️ <span>Visibility</span>
          <p>{info.visibility} m</p>
        </div>
        <div className="card-item">
          🌡️ <span>Temp Max</span>
          <p>{info.tempMax}°C</p>
        </div>
        <div className="card-item">
          🧊 <span>Temp Min</span>
          <p>{info.tempMin}°C</p>
        </div>
        <div className="card-item">
          🌅 <span>Description</span>
          <p>{info.description}</p>
        </div>
      </div>

      <Forecast hourly={info.hourly} />
    </div>
  );
}
