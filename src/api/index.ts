import {API_KEY} from '@env';

export type IWeatherResponse = {
  list: WeatherData[];
};

export type WeatherData = {
  main: Main;
  dt_txt: string;
  weather: Weather[];
};

type Main = {
  temp: number;
  feels_like: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  sea_level?: number;
  grnd_level?: number;
  humidity?: number;
  temp_kf?: number;
};

type Weather = {
  id?: number;
  main?: string;
  description: string;
  icon?: string;
};

export const searchForWeather = async (city: string) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city}&cnt=5`,
    );
    return response;
  } catch (e) {
    console.log('error:', e);
  }
};
