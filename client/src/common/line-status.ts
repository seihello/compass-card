export enum LineStatus {
  OnSchedule,
  Delay,
  NotInService
}

export type StatusMap = { [key: string]: LineStatus };