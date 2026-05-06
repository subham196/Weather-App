# 🌤️ Weather App

A clean and responsive weather application built with **React + Vite** that shows real-time weather data and a 24-hour forecast for any city in the world.

## 🔗 Live Demo

👉 [View Live](https://weather-app-xi-ebon-20.vercel.app/) 

## 📸 Preview


![Weather App Preview](./src/assets/preview.png)

---

## ✨ Features

- 🔍 Search weather by any city name
- 🌡️ Current temperature, max & min temp
- 💧 Humidity, wind speed & visibility
- ⏱️ 24-hour hourly forecast with weather icons
- 🎨 Glassmorphism UI design
- 📱 Fully responsive — mobile & desktop
- ❌ Error handling for invalid city names

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| React | Frontend UI |
| Vite | Build tool |
| CSS3 | Styling & glassmorphism |
| OpenWeatherMap API | Live weather data |

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- Free API key from [openweathermap.org](https://openweathermap.org/api)

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/subham196/Weather-App.git
   cd Weather-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file in root folder**
   ```
   VITE_API_KEY=your_openweathermap_api_key_here
   ```

4. **Run the app**
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser 🚀

---

## 📁 Project Structure

```
Weather-App/
├── public/
├── src/
│   ├── components/
│   │   ├── Forecast.jsx
│   │   ├── Forecast.css
│   │   ├── herosection.jsx
│   │   ├── herosection.css
│   │   ├── infoBox.jsx
│   │   ├── infoBox.css
│   │   ├── Searchbar.jsx
│   │   └── Searchbar.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env              # API key (not pushed to GitHub)
├── .env.example      # Template for API key
├── .gitignore
└── README.md
```

---

## 🌐 APIs Used

- [Current Weather API](https://openweathermap.org/current) — live weather data
- [5-Day Forecast API](https://openweathermap.org/forecast5) — 24-hour hourly forecast

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Subham**
- GitHub: [@subham196](https://github.com/subham196)
- LinkedIn: [Subham Pratap Singh](https://linkedin.com/in/subhampratapsingh27)
