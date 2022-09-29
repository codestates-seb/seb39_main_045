// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // api 요청 함수 import해오기

// interface TargetChallenge {
//   day: number
//   contents: string
//   time: string
// }
// interface Challenges {
//   index: string
//   success: boolean
//   type: string | 'MORNING' | 'STUDY' | 'THANKS'
//   targetDate: number
//   targetTime: number
//   histories: TargetChallenge[]
// }

// interface PreviousChallenges {
//   totalDate: number
//   totalChall: number
//   challenges: Challenges[]
// }

// const initialTotalChallenges: PreviousChallenges = {
//   totalDate: 0,
//   totalChall: 0,
//   challenges: []
// };

// export const fetchPreviousChallenges = createAsyncThunk(
//   'mypage/fetchPreviousChallenges',
//   async (totalData: [], thunkAPI) => {
//     const response = await fetchPreviousChallenges(value);
//     return response.data;
//   }
// );

export {};
