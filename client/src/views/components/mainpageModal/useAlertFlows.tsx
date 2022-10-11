import { useDispatch } from 'react-redux';
import { doLogout, giveUp, resign } from './alertFunction';

export const useAlertFlows = (stat: string) => {
  const dispatch = useDispatch();
  switch (stat) {
    case 'logout':
      return async () => await doLogout(dispatch);
    case 'giveup':
      return async () => await giveUp(dispatch);
    default:
      return async () => await resign(dispatch);
  }
};
export default useAlertFlows;
