export interface AlertProps extends DefaultProps {
  status: string
}
export interface TodayProps extends DefaultProps {
  status: string | null
}
export interface DefaultProps {
  setIsOpen: (state: boolean) => void
}
type AlertType = string | 'giveup' | 'logout' | 'resign';

export interface AlertMsg {
  [index: AlertType]: string
  giveup: string
  logout: string
  resign: string
}
export interface Choose {
  [index: string]: string | null
  challenge: string | null
  day: string | null
}
type TodayChall = string | 'study' | 'morning' | 'thanks';
export interface TodayEl {
  [index: TodayChall]: JSX.Element
  study: JSX.Element
  morning: JSX.Element
  thanks: JSX.Element
}
export interface TodayTitle {
  [index: TodayChall]: string
  study: string
  morning: string
  thanks: string
}
type SuccessFailType = string | 'success' | 'fail';
export interface SuccessFailMsg {
  [index: SuccessFailType]: string
  success: string
  fail: string
}
export interface SuccessFail {
  [index: string]: SuccessFailMsg
  title: SuccessFailMsg
  msg: SuccessFailMsg
}
