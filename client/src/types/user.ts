export interface SignupData {
  username: string
  email: string
  password: string
}
export interface LoginData {
  email: string | undefined
  password: string | undefined
}

export interface EditInfo {
  username: string
  prePassword: string | null
  newPassword: string | null
}
