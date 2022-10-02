import { useDispatch } from 'react-redux';
import { doLogout, giveUp } from './alertFunction';

export const useAlertFlows = (stat: string) => {
  const dispatch = useDispatch();
  switch (stat) {
    case 'logout':
      return async () => await doLogout(dispatch);
    case 'giveup':
      return async () => await giveUp(dispatch);
    default: // 민영님 여기에 같은 방법으로 함수 넣으심 돼요!
      // 이건 오류나서 임의로넣음- alertFunction에 함수 넣으심됩니다
      return async () => await giveUp(dispatch);
  }
};
export default useAlertFlows;
