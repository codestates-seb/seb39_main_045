import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 위치만 저장한다.
// boolean값을 저장하면-> 새로고침시 원하지않은 결과 발생
// 언제 저장한 위치를 바꿀것인가? -> 버튼클릭시
interface InitialLocation {
  path: string
}

const initialLocation: InitialLocation = {
  path: window.location.pathname
};

const locaitionSlice = createSlice({
  name: 'location',
  initialState: initialLocation,
  reducers: {
    click: (state, action: PayloadAction<InitialLocation>) => {
      state.path = action.payload.path;
    }
  }
});

export const { click } = locaitionSlice.actions;
export default locaitionSlice.reducer;
