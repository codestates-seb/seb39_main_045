import { AnyAction, Dispatch } from '@reduxjs/toolkit';

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
export interface StudyPreview {
  files: File
  setPicPreview: (state: string) => void
  dispatch: Dispatch<AnyAction>
}

// export interface Alert {
//   [index: string]: string
//   alertType: AlertType
//   alertMsg: string
//   alertFunc: () => void
// }
