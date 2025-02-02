const API_KEY = process.env.REACT_APP_API_KEY; // обрабатывает все переменные в момент сборки
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
export { API_URL, API_KEY };
