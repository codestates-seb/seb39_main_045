import { instance, instanceV2 } from './axiosInstance';
import { DefaultChalls, ExtendChalls } from 'types/challengePageTypes';
const getNowChall = async () =>
  await instanceV2
    .get('/challenges?active=true')
    .then((data) => data)
    .catch((err) => err.response);
const getTotalChall = async () =>
  await instanceV2
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
  await instanceV2
    .post(`/challenges?type=${status}`, challData)
    .then((data) => data)
    .catch((err) => err.response);
const postTodayStudy = async (challData: FormData) =>
  await instance
    .post('/histories', challData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((data) => data)
    .catch((err) => err.response);

const postTodayChall = async (challData: { time: Date } | { text: string }) =>
  await instance
    .post('/histories', challData)
    .then((data) => data)
    .catch((err) => err.response);
const getWater = async () =>
  await instanceV2
    .get('/challenges/water')
    .then((data) => data)
    .catch((err) => err.response);
const deleteChall = async () =>
  await instanceV2
    .delete('/challenges')
    .then((data) => data)
    .catch((err) => err.response);

export {
  getNowChall,
  getTotalChall,
  getRanking,
  postChall,
  postTodayStudy,
  postTodayChall,
  getWater,
  deleteChall
};
