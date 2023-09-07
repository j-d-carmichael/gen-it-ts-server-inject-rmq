/**
 * Optional payload to specify a single app type to update (i.e. to use via the non cron
 * route), leave empty to update all app types
 */
export interface MsVersionControlUpdateLatestAppVersions {
  /**
   * The app types supported on Liffery
   */
  appType?: AppType;
}

/**
 * The app types supported on Liffery
 */
export enum AppType {
  Android = 'android',
  Apple = 'apple',
}
