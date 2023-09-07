export interface MsNotificationAggregatorCreate {
  days?: Days;
  emailFrequency: EmailFrequency;
  username: string;
}

export interface Days {
  day1: number;
  day2: number;
}

export enum EmailFrequency {
  Daily = 'daily',
  Instant = 'instant',
  TwiceAWeek = 'twiceAWeek',
  Weekly = 'weekly',
}
