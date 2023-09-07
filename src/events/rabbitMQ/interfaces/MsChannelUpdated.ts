export interface MsChannelUpdated {
  channelNew?: ChannelNew;
  channelOld?: ChannelOld;
}

export interface ChannelNew {
  /**
   * UUID of the channel generated at the server
   */
  _id: string;
  /**
   * When true everyone can add, defaults to false, typical use case is a public channel
   */
  allCanAdd: boolean;
  archivedAt?: Date;
  /**
   * Additional data a user may add to the channel to help them in whatever way
   */
  channelMeta?: ChannelNewChannelMeta;
  /**
   * The type of channel this is, general or event. Scope to expand more types in the future,
   * e.g. research
   */
  channelType?: ChannelType;
  chatEnabled?: boolean;
  concierge?: ChannelNewConcierge;
  createdAt: Date;
  customFields?: ChannelNewCustomField[];
  customFieldsOrder?: ChannelNewCustomFieldsOrder;
  /**
   * The channel description
   */
  description?: string;
  event?: ChannelNewEvent;
  /**
   * The path to the hero cover image. This will either be a user uploaded image or a
   * placeholder image path.
   */
  imageHeroPath?: string;
  /**
   * Hero credit. Images from Pexels need to be credited. This is the photographer's name.
   */
  imageHeroPathCredit?: string;
  /**
   * The path to the image. This will either be a user uploaded image or a placeholder image
   * path.
   */
  imagePath: string;
  /**
   * Image credit. Images from Pexels need to be credited. This is the photographer's name.
   */
  imagePathCredit?: string;
  /**
   * The channel name, alphanumeric and hyphen only
   */
  name: string;
  owner: ChannelNewOwner;
  performanceValues: ChannelNewPerformanceValues;
  /**
   * Privacy determines who can and who cannot see or find the channel If auto-join is
   * selected then user will just join without needing to be approved
   */
  privacy: Privacy;
  /**
   * When true the share link for this channel will be functional and loading the channel
   * without, invited or not, will show the contents.
   */
  shareLinkEnabled?: boolean;
  /**
   * The channel slug is auto-genetated and is the creator's username followed by the
   * channel's name without special characters
   */
  slug: string;
  updatedAt: Date;
}

/**
 * Additional data a user may add to the channel to help them in whatever way
 */
export interface ChannelNewChannelMeta {
  budget?: PurpleBudget;
  dislikes?: string;
  geolocationData?: PurpleGeolocationData;
  likes?: string;
  requirements?: string;
}

export interface PurpleBudget {
  /**
   * Enum generated using currency codes from ms-static-api-data July 2022
   */
  currency: Currency;
  value: number;
}

/**
 * Enum generated using currency codes from ms-static-api-data July 2022
 */
export enum Currency {
  AMD = 'AMD',
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  BAM = 'BAM',
  BSD = 'BSD',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byn = 'BYN',
  Bzd = 'BZD',
  CAD = 'CAD',
  CRC = 'CRC',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  EGP = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  NIO = 'NIO',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  OMR = 'OMR',
  PHP = 'PHP',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  SSP = 'SSP',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Std = 'STD',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vef = 'VEF',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW',
  Zwl = 'ZWL',
}

export interface PurpleGeolocationData {
  /**
   * The formatted address as displayed to the user
   */
  formattedAddress?: string;
  /**
   * A compacted string of all the parts of the address which a user may be interested in
   * searching against, including the business name if there is one
   */
  keywordsAddress?: string;
  /**
   * ID as provided by Google, used when creating the out link to google maps
   */
  placeId?: string;
  position: PurplePosition;
}

export interface PurplePosition {
  /**
   * In a GeoJSON object, list the longitude first and the latitude second -
   * https://docs.mongodb.com/manual/reference/geojson/
   */
  coordinates: number[];
  /**
   * Only 'Point' supported for now. Other types are: MultiPoint, LineString, MultiLineString,
   * Polygon, MultiPolygon GeometryCollection
   */
  type: string;
}

/**
 * The type of channel this is, general or event. Scope to expand more types in the future,
 * e.g. research
 */
export enum ChannelType {
  Event = 'event',
  General = 'general',
  ResearchConcierge = 'researchConcierge',
}

export interface ChannelNewConcierge {
  active?: PurpleActive;
  archive?: PurpleArchive[];
}

export interface PurpleActive {
  actor?: PurpleActor;
  categories?: string[];
  jobCreated: Date;
  jobFinished?: Date;
  jobStarted?: Date;
  jobStatus: JobStatus;
  notifications?: PurpleNotification[];
  settings: PurpleSettings;
}

export interface PurpleActor {
  firstName: string;
  lastName: string;
  username: string;
}

export enum JobStatus {
  AwaitingConcierge = 'awaitingConcierge',
  Completed = 'completed',
  ConciergeAssigned = 'conciergeAssigned',
  ConciergeRemoved = 'conciergeRemoved',
}

export interface PurpleNotification {
  date: Date;
}

export interface PurpleSettings {
  conciergeType: ConciergeType;
  qtyItems: number;
  urgency: Urgency;
}

export enum ConciergeType {
  Collection = 'collection',
  SingleItem = 'singleItem',
  Travel = 'travel',
}

export enum Urgency {
  MoreThanOneWeek = 'moreThanOneWeek',
  OneWeek = 'oneWeek',
  ThreeDays = 'threeDays',
}

export interface PurpleArchive {
  actor?: FluffyActor;
  categories?: string[];
  jobCreated: Date;
  jobFinished?: Date;
  jobStarted?: Date;
  jobStatus: JobStatus;
  notifications?: FluffyNotification[];
  settings: FluffySettings;
}

export interface FluffyActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface FluffyNotification {
  date: Date;
}

export interface FluffySettings {
  conciergeType: ConciergeType;
  qtyItems: number;
  urgency: Urgency;
}

export interface ChannelNewCustomField {
  /**
   * UUID v4
   */
  _id: string;
  fieldType: FieldType;
  label: string;
  modifier?: number;
  options?: string[];
  /**
   * The unit will be derived from the static data API
   */
  unit: string;
}

export enum FieldType {
  Area = 'area',
  Checklist = 'checklist',
  Compass = 'compass',
  Custom = 'custom',
  CustomSelect = 'customSelect',
  Date = 'date',
  Distance = 'distance',
  Electrical = 'electrical',
  Power = 'power',
  Pressure = 'pressure',
  Price = 'price',
  Rating = 'rating',
  Speed = 'speed',
  Temperature = 'temperature',
  Volume = 'volume',
  Weight = 'weight',
}

export interface ChannelNewCustomFieldsOrder {
  customFieldDisplay: PurpleCustomFieldDisplay[];
  nonCustomFields: PurpleNonCustomField[];
}

export interface PurpleCustomFieldDisplay {
  _id: string;
  show: boolean;
}

export interface PurpleNonCustomField {
  key: string;
  show: boolean;
}

export interface ChannelNewEvent {
  eventDate: Date;
  eventFinished?: boolean;
  eventNotificationsSent?: EventNotificationsSent[];
  /**
   * One off events are archived at event date, rest have a new date set according to
   * repetition settings
   */
  eventType: EventType;
  repetitionSettings?: PurpleRepetitionSettings;
}

export enum EventNotificationsSent {
  OneDayBefore = 'oneDayBefore',
  OneWeekBefore = 'oneWeekBefore',
  ThreeHoursBefore = 'threeHoursBefore',
  TwoWeeksBefore = 'twoWeeksBefore',
}

/**
 * One off events are archived at event date, rest have a new date set according to
 * repetition settings
 */
export enum EventType {
  Monthly = 'monthly',
  OneOff = 'oneOff',
  Weekly = 'weekly',
  Yearly = 'yearly',
}

export interface PurpleRepetitionSettings {
  day: number;
  week?: number;
}

export interface ChannelNewOwner {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ChannelNewPerformanceValues {
  memberCount: number;
}

/**
 * Privacy determines who can and who cannot see or find the channel If auto-join is
 * selected then user will just join without needing to be approved
 */
export enum Privacy {
  FriendsOnly = 'friendsOnly',
  Private = 'private',
  Public = 'public',
  PublicAutojoin = 'publicAutojoin',
}

export interface ChannelOld {
  /**
   * UUID of the channel generated at the server
   */
  _id: string;
  /**
   * When true everyone can add, defaults to false, typical use case is a public channel
   */
  allCanAdd: boolean;
  archivedAt?: Date;
  /**
   * Additional data a user may add to the channel to help them in whatever way
   */
  channelMeta?: ChannelOldChannelMeta;
  /**
   * The type of channel this is, general or event. Scope to expand more types in the future,
   * e.g. research
   */
  channelType?: ChannelType;
  chatEnabled?: boolean;
  concierge?: ChannelOldConcierge;
  createdAt: Date;
  customFields?: ChannelOldCustomField[];
  customFieldsOrder?: ChannelOldCustomFieldsOrder;
  /**
   * The channel description
   */
  description?: string;
  event?: ChannelOldEvent;
  /**
   * The path to the hero cover image. This will either be a user uploaded image or a
   * placeholder image path.
   */
  imageHeroPath?: string;
  /**
   * Hero credit. Images from Pexels need to be credited. This is the photographer's name.
   */
  imageHeroPathCredit?: string;
  /**
   * The path to the image. This will either be a user uploaded image or a placeholder image
   * path.
   */
  imagePath: string;
  /**
   * Image credit. Images from Pexels need to be credited. This is the photographer's name.
   */
  imagePathCredit?: string;
  /**
   * The channel name, alphanumeric and hyphen only
   */
  name: string;
  owner: ChannelOldOwner;
  performanceValues: ChannelOldPerformanceValues;
  /**
   * Privacy determines who can and who cannot see or find the channel If auto-join is
   * selected then user will just join without needing to be approved
   */
  privacy: Privacy;
  /**
   * When true the share link for this channel will be functional and loading the channel
   * without, invited or not, will show the contents.
   */
  shareLinkEnabled?: boolean;
  /**
   * The channel slug is auto-genetated and is the creator's username followed by the
   * channel's name without special characters
   */
  slug: string;
  updatedAt: Date;
}

/**
 * Additional data a user may add to the channel to help them in whatever way
 */
export interface ChannelOldChannelMeta {
  budget?: FluffyBudget;
  dislikes?: string;
  geolocationData?: FluffyGeolocationData;
  likes?: string;
  requirements?: string;
}

export interface FluffyBudget {
  /**
   * Enum generated using currency codes from ms-static-api-data July 2022
   */
  currency: Currency;
  value: number;
}

export interface FluffyGeolocationData {
  /**
   * The formatted address as displayed to the user
   */
  formattedAddress?: string;
  /**
   * A compacted string of all the parts of the address which a user may be interested in
   * searching against, including the business name if there is one
   */
  keywordsAddress?: string;
  /**
   * ID as provided by Google, used when creating the out link to google maps
   */
  placeId?: string;
  position: FluffyPosition;
}

export interface FluffyPosition {
  /**
   * In a GeoJSON object, list the longitude first and the latitude second -
   * https://docs.mongodb.com/manual/reference/geojson/
   */
  coordinates: number[];
  /**
   * Only 'Point' supported for now. Other types are: MultiPoint, LineString, MultiLineString,
   * Polygon, MultiPolygon GeometryCollection
   */
  type: string;
}

export interface ChannelOldConcierge {
  active?: FluffyActive;
  archive?: FluffyArchive[];
}

export interface FluffyActive {
  actor?: TentacledActor;
  categories?: string[];
  jobCreated: Date;
  jobFinished?: Date;
  jobStarted?: Date;
  jobStatus: JobStatus;
  notifications?: TentacledNotification[];
  settings: TentacledSettings;
}

export interface TentacledActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface TentacledNotification {
  date: Date;
}

export interface TentacledSettings {
  conciergeType: ConciergeType;
  qtyItems: number;
  urgency: Urgency;
}

export interface FluffyArchive {
  actor?: StickyActor;
  categories?: string[];
  jobCreated: Date;
  jobFinished?: Date;
  jobStarted?: Date;
  jobStatus: JobStatus;
  notifications?: StickyNotification[];
  settings: StickySettings;
}

export interface StickyActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface StickyNotification {
  date: Date;
}

export interface StickySettings {
  conciergeType: ConciergeType;
  qtyItems: number;
  urgency: Urgency;
}

export interface ChannelOldCustomField {
  /**
   * UUID v4
   */
  _id: string;
  fieldType: FieldType;
  label: string;
  modifier?: number;
  options?: string[];
  /**
   * The unit will be derived from the static data API
   */
  unit: string;
}

export interface ChannelOldCustomFieldsOrder {
  customFieldDisplay: FluffyCustomFieldDisplay[];
  nonCustomFields: FluffyNonCustomField[];
}

export interface FluffyCustomFieldDisplay {
  _id: string;
  show: boolean;
}

export interface FluffyNonCustomField {
  key: string;
  show: boolean;
}

export interface ChannelOldEvent {
  eventDate: Date;
  eventFinished?: boolean;
  eventNotificationsSent?: EventNotificationsSent[];
  /**
   * One off events are archived at event date, rest have a new date set according to
   * repetition settings
   */
  eventType: EventType;
  repetitionSettings?: FluffyRepetitionSettings;
}

export interface FluffyRepetitionSettings {
  day: number;
  week?: number;
}

export interface ChannelOldOwner {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ChannelOldPerformanceValues {
  memberCount: number;
}
