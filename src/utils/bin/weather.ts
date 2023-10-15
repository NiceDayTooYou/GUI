import { getWeather } from '../../api';

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return 'Enter: weather [city]. Example: weather beijing 输入：weather [city]. 示例：weather beijing';
  }

  const weather = await getWeather(city);

  return weather;
};
