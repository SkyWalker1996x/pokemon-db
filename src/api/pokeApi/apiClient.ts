import axios, { AxiosInstance } from 'axios';

const apiURL = 'https://pokeapi.co/api/v2/pokemon';

const pokeApi: AxiosInstance = axios.create({
  baseURL: apiURL,
});

export default pokeApi;
