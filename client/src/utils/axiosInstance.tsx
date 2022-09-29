import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.cactus-villeage.com/api/v1',
  withCredentials: true
});
