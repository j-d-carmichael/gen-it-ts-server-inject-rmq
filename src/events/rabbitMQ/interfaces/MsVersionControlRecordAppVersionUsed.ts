export interface MsVersionControlRecordAppVersionUsed {
  /**
   * The app types supported on Liffery
   */
  appType: AppType;
  username: string;
  version: string;
}

/**
 * The app types supported on Liffery
 */
export enum AppType {
  Android = 'android',
  Apple = 'apple',
}
