import { instance } from './axiosInstance';
import { DefaultChalls, ExtendChalls } from 'types/challengePageTypes';
const getNowChall = async () =>
  await instance
    .get('/challenges?active=true')
    .then((data) => data)
    .catch((err) => err.response);
const getTotalChall = async () =>
  await instance
    .get('/challenges')
    .then((data) => data)
    .catch((err) => err.response);
const getRanking = async () =>
  await instance
    .get('/rankings')
    .then((data) => data)
    .catch((err) => err.response);
const postChall = async (
  status: string,
  challData: DefaultChalls | ExtendChalls
) =>
  await instance
    .post(`/challenges?type=${status}`, challData)
    .then((data) => data)
    .catch((err) => err.response);
const postTodayChall = async (challData: any) =>
  await instance
    .post('/histories', challData)
    .then((data) => data)
    .catch((err) => err.response);
const getWater = async () =>
  await instance
    .get('/challenges/water')
    .then((data) => data)
    .catch((err) => err.response);
const deleteChall = async () =>
  await instance
    .delete('/challenges')
    .then((data) => data)
    .catch((err) => err.response);

export {
  getNowChall,
  getTotalChall,
  getRanking,
  postChall,
  postTodayChall,
  getWater,
  deleteChall
};
