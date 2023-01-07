const api = 'http://api.openweathermap.org/geo/1.0/direct?';
const apiId = 'abafcaf6654d7d047002bef3579e4df7';
const apiReverse = 'http://api.openweathermap.org/geo/1.0/reverse?';

const getGeoLocation = async (place) => {
  const response = await fetch(`${api}q=${place}&limit=5&appid=${apiId}`)
    .then((response) => response.json())
    .catch((error) => {
      throw (error);
    });
  return response;
};
export const getGeoLocationReverse = async (lat, lon) => {
  const response = await fetch(`${apiReverse}lat=${lat}&lon=${lon}&limit=5&appid=${apiId}`)
    .then((response) => response.json())
    .catch((error) => {
      throw (error);
    });
  return response;
};

export default getGeoLocation;
