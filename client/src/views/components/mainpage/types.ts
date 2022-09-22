export interface AlertProps {
  setIsOpen: (state: boolean) => void
  status: string
}
export interface AlertMsg {
  [index: string]: string
  giveup: string
  logout: string
  resign: string
}
