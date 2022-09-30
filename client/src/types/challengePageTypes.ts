interface DefaultChalls {
  challengeType: string
  targetDate: number
}
interface ExtendChalls extends DefaultChalls {
  targetTime: number
}
export type { DefaultChalls, ExtendChalls };
