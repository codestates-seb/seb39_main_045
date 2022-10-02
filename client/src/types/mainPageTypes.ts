export interface AlertProps extends DefaultProps {
  status: string
}
export interface TodayProps extends DefaultProps {
  status: string | null
}
export interface DefaultProps {
  setIsOpen: (state: boolean) => void
}

export interface AlertMsg {
  [index: string]: string
  giveup: string
  logout: string
  resign: string
}
export interface Choose {
  [index: string]: string | null
  challenge: string | null
  day: string | null
}
type AlertType = string | 'giveup' | 'logout' | 'resign';

// export interface Alert {
//   [index: string]: string
//   alertType: AlertType
//   alertMsg: string
//   alertFunc: () => void
// }
