import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.cactus-villeage.com/api/v1',
  withCredentials: true
});
export const instanceV2 = axios.create({
  baseURL: 'https://api.cactus-villeage.com/api/v2',
  withCredentials: true
});
