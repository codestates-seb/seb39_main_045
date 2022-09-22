export interface AlertProps extends DefaultProps {
  status: string
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
