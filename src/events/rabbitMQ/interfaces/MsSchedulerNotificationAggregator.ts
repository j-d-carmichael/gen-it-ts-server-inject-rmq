export interface MsSchedulerNotificationAggregator {
  days?: Days;
  send: boolean;
}

export interface Days {
  day1: number;
  day2: number;
}
