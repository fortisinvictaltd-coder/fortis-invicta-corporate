export interface WeatherData {
  location: string;
  lat: number;
  lng: number;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  visibility: number;
  conditions: string;
  description: string;
  icon: string;
  sunrise: string;
  sunset: string;
  lastUpdated: string;
}

export interface WeatherForecast {
  date: string;
  high: number;
  low: number;
  conditions: string;
  icon: string;
  precipitation: number;
}

export const WEATHER_LOCATIONS = [
  { id: 'banjul-airport', name: 'Banjul International Airport', lat: 13.3380, lng: -16.6522, type: 'aviation' },
  { id: 'banjul-city', name: 'Banjul City', lat: 13.4549, lng: -16.5775, type: 'capital' },
  { id: 'brikama', name: 'Brikama (Circular Hub)', lat: 13.2714, lng: -16.6508, type: 'hub' },
  { id: 'basse', name: 'Basse (URR)', lat: 13.4833, lng: -14.2167, type: 'regional' },
  { id: 'janjangbureh', name: 'Janjangbureh (CRR)', lat: 13.5333, lng: -14.7667, type: 'regional' },
  { id: 'farafenni', name: 'Farafenni (North Bank)', lat: 13.569, lng: -15.606, type: 'regional' },
];

export function getMockWeatherData(lat: number, lng: number): WeatherData {
  return {
    location: lat === 13.3380 ? 'Banjul Airport' : 'Gambia',
    lat,
    lng,
    temperature: 32,
    feelsLike: 34,
    humidity: 65,
    windSpeed: 12,
    windDirection: 'W',
    pressure: 1012,
    visibility: 10,
    conditions: 'Sunny',
    description: 'clear sky',
    icon: 'https://openweathermap.org/img/wn/01d@2x.png',
    sunrise: '6:45 AM',
    sunset: '6:30 PM',
    lastUpdated: new Date().toLocaleString(),
  };
}

export function getMockForecast(): WeatherForecast[] {
  return [
    { date: new Date().toISOString().split('T')[0], high: 34, low: 24, conditions: 'Sunny', icon: 'https://openweathermap.org/img/wn/01d@2x.png', precipitation: 0 },
    { date: new Date(Date.now() + 86400000).toISOString().split('T')[0], high: 33, low: 25, conditions: 'Partly Cloudy', icon: 'https://openweathermap.org/img/wn/02d@2x.png', precipitation: 10 },
    { date: new Date(Date.now() + 172800000).toISOString().split('T')[0], high: 32, low: 24, conditions: 'Sunny', icon: 'https://openweathermap.org/img/wn/01d@2x.png', precipitation: 0 },
  ];
}

export async function fetchWeatherData(lat: number, lng: number): Promise<WeatherData> {
  return getMockWeatherData(lat, lng);
}

export async function fetchForecast(): Promise<WeatherForecast[]> {
  return getMockForecast();
}