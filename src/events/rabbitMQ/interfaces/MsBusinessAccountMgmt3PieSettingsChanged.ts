export interface MsBusinessAccountMgmt3PieSettingsChanged {
  _id: string;
  /**
   * The foreign relation key.. ie the ../account/model id
   */
  accountId: string;
  active: boolean;
  createdAt: Date;
  createdBy: string;
  deletedAt?: Date;
  managers?: Manager[];
  origin: string;
  permittedIps?: string[];
  sidebarSettings: SidebarSettings;
  updatedAt: Date;
  /**
   * Set only by the server
   */
  validated: boolean;
}

export interface Manager {
  createdAt?: Date;
  firstName: string;
  lastName: string;
  username: string;
}

export interface SidebarSettings {
  addItemTargets: AddItemTargets;
  attentionSeekers?: AttentionSeeker[];
  customCSS: string;
  featureSwitch: FeatureSwitch;
  initialStateOpen: boolean;
  position: Position;
  promoteUrls: PromoteUrl[];
  promoteUrlsTitle: string;
  showFriendsItems: ShowFriendsItems;
  showOthersItems: ShowOthersItems;
  showOwnItems: ShowOwnItems;
  unauthenticated: Unauthenticated;
}

export interface AddItemTargets {
  icon?: Icon;
  targets?: Target[];
}

export interface Icon {
  active: Active;
  inactive: Inactive;
}

export interface Active {
  d: string;
  fill: string;
  stroke: string;
  strokeLinecap: string;
  strokeLinejoin: string;
  strokeWidth: string;
}

export interface Inactive {
  d: string;
  fill: string;
  stroke: string;
  strokeLinecap: string;
  strokeLinejoin: string;
  strokeWidth: string;
}

export interface Target {
  autoZIndexOff?: boolean;
  css?: Css;
  link?: string;
  name?: string;
  target?: string;
  urlTarget?: string;
}

export interface Css {
  bottom?: string;
  left?: string;
  margin?: string;
  position?: string;
  right?: string;
  top?: string;
  width?: string;
}

export interface AttentionSeeker {
  action: Action;
  /**
   * Whether to show to logged in, not logged in, or both
   */
  authenticated: Authenticated;
  /**
   * Maximum number of times this attention seeker should run
   */
  limit?: number;
  /**
   * After this number of days, will start running attention seekers again until limit is
   * reached again
   */
  resetAfterDays?: number;
  triggers: Trigger[];
  uuid: string;
}

export enum Action {
  HeartColourSweep = 'HeartColourSweep',
  HeartShockwave = 'HeartShockwave',
  HeartWiggle = 'HeartWiggle',
  SidebarBounce = 'SidebarBounce',
  SidebarShockwave = 'SidebarShockwave',
}

/**
 * Whether to show to logged in, not logged in, or both
 */
export enum Authenticated {
  All = 'All',
  AuthenticatedOnly = 'AuthenticatedOnly',
  UnauthenticatedOnly = 'UnauthenticatedOnly',
}

export interface Trigger {
  /**
   * String to use in document.querySelector when waiting for element to be visible
   */
  triggerTarget?: string;
  triggerType: TriggerType;
  /**
   * Number representing percentage scrolled to or time on page
   */
  triggerValue?: number;
}

export enum TriggerType {
  ElementVisible = 'ElementVisible',
  PercentageScrolledTo = 'PercentageScrolledTo',
  TimeOnPage = 'TimeOnPage',
}

export interface FeatureSwitch {
  /**
   * CSS selector to exclude
   */
  addItemExcludeCssSelector?: string[];
  /**
   * When matching origin
   */
  addItemExcludeUrls?: string[];
  /**
   * CSS selector to include
   */
  addItemIncludeCssSelector?: string[];
  /**
   * When present the
   */
  addItemIncludeUrls?: string[];
}

export enum Position {
  Left = 'left',
  Right = 'right',
}

export interface PromoteUrl {
  url: string;
}

export interface ShowFriendsItems {
  fetch: Fetch;
  noResultsText: string;
  order: Order;
  /**
   * The sort order of the tabs in view using js sort()
   */
  position: number;
  show: boolean;
  /**
   * Sort will not affect the order when set to random
   */
  sort: Sort;
}

export enum Fetch {
  All = 'all',
  UpToOneYear = 'upToOneYear',
}

export enum Order {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

/**
 * Sort will not affect the order when set to random
 */
export enum Sort {
  Asc = 'asc',
  Desc = 'desc',
}

export interface ShowOthersItems {
  fetch: Fetch;
  noResultsText: string;
  order: Order;
  /**
   * The sort order of the tabs in view using js sort()
   */
  position: number;
  show: boolean;
  /**
   * Sort will not affect the order when set to random
   */
  sort: Sort;
}

export interface ShowOwnItems {
  fetch: Fetch;
  noResultsText: string;
  order: Order;
  /**
   * The sort order of the tabs in view using js sort()
   */
  position: number;
  show: boolean;
  /**
   * Sort will not affect the order when set to random
   */
  sort: Sort;
}

export interface Unauthenticated {
  nonProductPageImage: NonProductPageImage;
  /**
   * if not passed by the user then a default text will be used
   */
  openerText?: string;
  /**
   * if not passed by the user then a default text will be used
   */
  openerText2?: string;
  /**
   * if not passed by the user then a default text will be used
   */
  openerText3?: string;
}

export interface NonProductPageImage {
  /**
   * The will be filled when the type is link, it is the URL to the product page
   */
  linkUrl?: string;
  /**
   * URL preview image on the image cache, OR, the image URL from the image uploaded
   */
  url: string;
  urlType: UrlType;
}

export enum UrlType {
  Image = 'image',
  Link = 'link',
}
