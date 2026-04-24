"use client";

import { useState, useEffect } from 'react';
import LocationMap from '@/components/LocationMap';
import { fetchWeatherData, fetchForecast, getMockWeatherData, getMockForecast, type WeatherData, type WeatherForecast } from '@/lib/weather-data';

const AIRPORT_LAT = 13.3380;
const AIRPORT_LNG = -16.6522;

export default function AirportPage() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWeather();
  }, []);

  const loadWeather = async () => {
    setLoading(true);
    const weatherData = await fetchWeatherData(AIRPORT_LAT, AIRPORT_LNG);
    const forecastData = await fetchForecast();
    setWeather(weatherData);
    setForecast(forecastData);
    setLoading(false);
  };

  const getWeatherIcon = (conditions: string) => {
    const lower = conditions?.toLowerCase() || '';
    if (lower.includes('rain')) return '🌧️';
    if (lower.includes('cloud')) return '☁️';
    if (lower.includes('clear') || lower.includes('sun')) return '☀️';
    if (lower.includes('thunder')) return '⛈️';
    if (lower.includes('fog')) return '🌫️';
    return '🌤️';
  };

  const getWeatherCommentary = (weather: WeatherData | null) => {
    if (!weather) return 'The Gambia enjoys year-round sunshine, perfect for solar energy and circular economy operations.';
    if (weather.conditions === 'Sunny' || weather.conditions === 'Clear') {
      return '☀️ Perfect conditions for solar drying and ISCEB block production. The sun powers our regenerative future.';
    }
    if (weather.conditions.includes('Rain')) {
      return '🌧️ Rainwater harvesting activated. Every drop supports our Wolffia-AWG wastewater treatment systems.';
    }
    return '🌤️ Optimal conditions for BSF larvae growth and biochar production. Nature is our partner.';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="bg-gradient-to-r from-fortis-green to-fortis-dark text-white py-12 px-4">
        <div className="container-s max-w-6xl text-center">
          <div className="text-6xl mb-4">✈️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Banjul International Airport</h1>
          <p className="text-xl opacity-90">BJL / GBYD • Yundum, The Gambia</p>
          <p className="text-sm opacity-75 mt-2">Live 3D Mapping • Real-time Weather • Flight Links</p>
        </div>
      </div>

      <div className="container-s max-w-6xl px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-fortis-gold/10 px-6 py-4 border-b border-fortis-gold/20">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <h2 className="text-2xl font-bold text-fortis-green">🌤️ Live Weather Dashboard</h2>
              <div className="text-sm text-gray-500">Last updated: {weather?.lastUpdated || 'Loading...'}</div>
            </div>
          </div>
          
          {loading ? (
            <div className="p-12 text-center">Loading weather data...</div>
          ) : weather ? (
            <div>
              <div className="p-6 grid md:grid-cols-3 gap-6">
                <div className="text-center md:text-left">
                  <div className="text-6xl mb-2">{getWeatherIcon(weather.conditions)}</div>
                  <div className="text-4xl font-bold">{weather.temperature}°C</div>
                  <div className="text-gray-500">Feels like {weather.feelsLike}°C</div>
                  <div className="text-lg font-semibold mt-2">{weather.conditions}</div>
                  <div className="text-sm text-gray-500 capitalize">{weather.description}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div><div className="text-sm text-gray-500">💧 Humidity</div><div className="text-xl font-semibold">{weather.humidity}%</div></div>
                  <div><div className="text-sm text-gray-500">💨 Wind</div><div className="text-xl font-semibold">{weather.windSpeed} km/h {weather.windDirection}</div></div>
                  <div><div className="text-sm text-gray-500">👁️ Visibility</div><div className="text-xl font-semibold">{weather.visibility} km</div></div>
                  <div><div className="text-sm text-gray-500">📊 Pressure</div><div className="text-xl font-semibold">{weather.pressure} hPa</div></div>
                </div>
                
                <div className="text-center md:text-right">
                  <div className="text-sm text-gray-500">🌅 Sunrise</div>
                  <div className="text-lg font-semibold">{weather.sunrise}</div>
                  <div className="text-sm text-gray-500 mt-2">🌇 Sunset</div>
                  <div className="text-lg font-semibold">{weather.sunset}</div>
                </div>
              </div>
              
              <div className="bg-fortis-green/10 mx-6 mb-6 p-4 rounded-xl border-l-4 border-fortis-green">
                <p className="text-fortis-green text-sm md:text-base italic">
                  "{getWeatherCommentary(weather)}"
                </p>
                <p className="text-fortis-green/70 text-xs mt-2">— Fortis Invicta Weather Intelligence</p>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-red-500">Failed to load weather data</div>
          )}
        </div>

        <LocationMap
          name="Banjul International Airport (BJL/GBYD)"
          address="Yundum, West Coast Region, The Gambia"
          lat={AIRPORT_LAT}
          lng={AIRPORT_LNG}
          website="https://www.banjulairport.com"
          phone="+220 447 2831"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-fortis-green mb-4">✈️ Live Flight Information</h3>
            <div className="space-y-3">
              <a href="https://www.flightradar24.com/data/airports/bjl" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-sky-50 rounded-xl hover:bg-sky-100 transition">
                <span>🛫 FlightRadar24</span>
                <span className="text-fortis-green">Live Tracking →</span>
              </a>
              <a href="https://flightaware.com/live/airport/GBYD" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-sky-50 rounded-xl hover:bg-sky-100 transition">
                <span>✈️ FlightAware</span>
                <span className="text-fortis-green">Real-time Status →</span>
              </a>
              <a href="https://www.banjulairport.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-sky-50 rounded-xl hover:bg-sky-100 transition">
                <span>📅 Official Schedule</span>
                <span className="text-fortis-green">View →</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-fortis-green mb-4">📡 ATC & Airport Info</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between py-2 border-b"><span className="font-medium">Tower Frequency:</span><span>118.7 MHz</span></div>
              <div className="flex justify-between py-2 border-b"><span className="font-medium">Approach:</span><span>119.5 MHz</span></div>
              <div className="flex justify-between py-2 border-b"><span className="font-medium">ATIS:</span><span>126.2 MHz</span></div>
              <div className="flex justify-between py-2 border-b"><span className="font-medium">Runway:</span><span>14/32 • 3,600m x 45m</span></div>
              <div className="flex justify-between py-2"><span className="font-medium">Status:</span><span className="text-fortis-green font-bold">🟢 Operational 24/7</span></div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-fortis-green/10 to-fortis-gold/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-fortis-green text-center mb-4">🇬🇲 Weather Across The Gambia</h3>
          <p className="text-center text-gray-600 text-sm mb-4">Fortis Invicta operates across all regions. Weather data informs our circular economy operations.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="text-center p-2 bg-white rounded-lg"><div className="text-2xl">☀️</div><div className="font-medium text-sm">Banjul</div><div className="text-xs">32°C</div></div>
            <div className="text-center p-2 bg-white rounded-lg"><div className="text-2xl">☀️</div><div className="font-medium text-sm">Brikama</div><div className="text-xs">33°C</div></div>
            <div className="text-center p-2 bg-white rounded-lg"><div className="text-2xl">☀️</div><div className="font-medium text-sm">Basse</div><div className="text-xs">35°C</div></div>
            <div className="text-center p-2 bg-white rounded-lg"><div className="text-2xl">🌤️</div><div className="font-medium text-sm">Janjangbureh</div><div className="text-xs">34°C</div></div>
            <div className="text-center p-2 bg-white rounded-lg"><div className="text-2xl">☀️</div><div className="font-medium text-sm">Farafenni</div><div className="text-xs">34°C</div></div>
            <div className="text-center p-2 bg-white rounded-lg"><div className="text-2xl">☀️</div><div className="font-medium text-sm">Gunjur</div><div className="text-xs">31°C</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}