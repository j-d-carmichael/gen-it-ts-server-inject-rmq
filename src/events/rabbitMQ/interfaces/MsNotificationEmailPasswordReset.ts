export interface MsNotificationEmailPasswordReset {
  fromOrigin: FromOrigin;
  hash: string;
  to: string;
}

export enum FromOrigin {
  The3PieAdmin = '3pieAdmin',
  UserApp = 'UserApp',
}
