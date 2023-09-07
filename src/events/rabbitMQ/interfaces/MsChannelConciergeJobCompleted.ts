export interface MsChannelConciergeJobCompleted {
  channel: MsChannelConciergeJobCompletedChannel;
  conciergeItems: ConciergeItem[];
}

export interface MsChannelConciergeJobCompletedChannel {
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
  channelMeta?: ChannelMeta;
  /**
   * The type of channel this is, general or event. Scope to expand more types in the future,
   * e.g. research
   */
  channelType?: ChannelType;
  chatEnabled?: boolean;
  concierge?: Concierge;
  createdAt: Date;
  customFields?: PurpleCustomField[];
  customFieldsOrder?: CustomFieldsOrder;
  /**
   * The channel description
   */
  description?: string;
  event?: Event;
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
  owner: Owner;
  performanceValues: ChannelPerformanceValues;
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
export interface ChannelMeta {
  budget?: Budget;
  dislikes?: string;
  geolocationData?: ChannelMetaGeolocationData;
  likes?: string;
  requirements?: string;
}

export interface Budget {
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

export interface ChannelMetaGeolocationData {
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

export interface Concierge {
  active?: Active;
  archive?: Archive[];
}

export interface Active {
  actor?: ActiveActor;
  categories?: string[];
  jobCreated: Date;
  jobFinished?: Date;
  jobStarted?: Date;
  jobStatus: JobStatus;
  notifications?: ActiveNotification[];
  settings: ActiveSettings;
}

export interface ActiveActor {
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

export interface ActiveNotification {
  date: Date;
}

export interface ActiveSettings {
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

export interface Archive {
  actor?: ArchiveActor;
  categories?: string[];
  jobCreated: Date;
  jobFinished?: Date;
  jobStarted?: Date;
  jobStatus: JobStatus;
  notifications?: ArchiveNotification[];
  settings: ArchiveSettings;
}

export interface ArchiveActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ArchiveNotification {
  date: Date;
}

export interface ArchiveSettings {
  conciergeType: ConciergeType;
  qtyItems: number;
  urgency: Urgency;
}

export interface PurpleCustomField {
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

export interface CustomFieldsOrder {
  customFieldDisplay: CustomFieldDisplay[];
  nonCustomFields: NonCustomField[];
}

export interface CustomFieldDisplay {
  _id: string;
  show: boolean;
}

export interface NonCustomField {
  key: string;
  show: boolean;
}

export interface Event {
  eventDate: Date;
  eventFinished?: boolean;
  eventNotificationsSent?: EventNotificationsSent[];
  /**
   * One off events are archived at event date, rest have a new date set according to
   * repetition settings
   */
  eventType: EventType;
  repetitionSettings?: RepetitionSettings;
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

export interface RepetitionSettings {
  day: number;
  week?: number;
}

export interface Owner {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ChannelPerformanceValues {
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

export interface ConciergeItem {
  actor: ConciergeItemActor;
  anonymous?: boolean;
  categorisation?: Categorisation;
  comments: Comment[];
  countInGroup?: number;
  createdAt: Date;
  deletedAt?: Date;
  editable: Editable;
  getgot: Getgot[];
  hashTags?: string[];
  inChannelWeight?: number;
  likes: ConciergeItemLike[];
  moderation?: ConciergeItemModeration;
  performanceValues: ConciergeItemPerformanceValues;
  pins: Pin[];
  reminder?: Reminder;
  /**
   * A url safe name that is unique to this item, eg "dog-200" would be the 201th dog added to
   * the system. By default this is a UUID
   */
  uniqueItemName: string;
  updatedAt: Date;
  /**
   * The URL is extracted from the user text sent. The fetch of the preview is then completely
   * autonomous to prevent a hacker from injecting false content, eg submitting a recognisable
   * url image but a dangerous url. As such, the URL data itself is never editable directly by
   * the user which in addition gives the API more control on what is and what is not
   * displayed.
   */
  urlCache?: UrlCache;
  /**
   * User uploaded photos of an item
   */
  userPhotos?: UserPhoto[];
}

export interface ConciergeItemActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface Categorisation {
  categoryGroupings?: CategoryGroupings;
  contentCategories?: ContentCategory[];
  createdAt: Date;
  /**
   * Enum to speed up query so we are not analysing array of objects all the time to figure
   * out failures. If state is failed we attempt to categorise the image a second time after 1
   * month. Success indicates has categories. SuccessGrouped has categories and is grouped.
   * I.e. This is the final state of this sub document.
   */
  state: State;
  updatedAt: Date;
}

export interface CategoryGroupings {
  all: All[];
  createdAt: Date;
  main: Main;
  updatedAt: Date;
}

export interface All {
  confidence: number;
  name: string;
  /**
   * rankVal = confidence * updatedAt timestamp * multiplier   multiplier =
   * (1+(1-(1/(P+1))))   P = popularityOverXTime, as found in performanceValues
   */
  rankVal?: number;
}

export interface Main {
  confidence: number;
  name: string;
  /**
   * rankVal = confidence * updatedAt timestamp * multiplier   multiplier =
   * (1+(1-(1/(P+1))))   P = popularityOverXTime, as found in performanceValues
   */
  rankVal?: number;
}

export interface ContentCategory {
  categoryType: CategoryType;
  confidence: number;
  /**
   * May expand as required in future, e.g. UrlMetaDescription, if NLP's advance or we train
   * our own
   */
  contentType: ContentType;
  instances?: Instances;
  name: string;
  relatedCategories?: RelatedCategory[];
}

export enum CategoryType {
  Label = 'label',
  Logo = 'logo',
}

/**
 * May expand as required in future, e.g. UrlMetaDescription, if NLP's advance or we train
 * our own
 */
export enum ContentType {
  Image = 'image',
}

export interface Instances {
  amazon?: Amazon[];
  google?: Google[];
}

export interface Amazon {
  BoundingBox: BoundingBox;
  Confidence: number;
}

export interface BoundingBox {
  Height: number;
  Left: number;
  Top: number;
  Width: number;
}

export interface Google {
  vertices: Vertex[];
}

export interface Vertex {
  x: number;
  y: number;
}

export interface RelatedCategory {
  name: string;
}

/**
 * Enum to speed up query so we are not analysing array of objects all the time to figure
 * out failures. If state is failed we attempt to categorise the image a second time after 1
 * month. Success indicates has categories. SuccessGrouped has categories and is grouped.
 * I.e. This is the final state of this sub document.
 */
export enum State {
  Failed = 'failed',
  FailedSecond = 'failedSecond',
  Success = 'success',
  SuccessGrouped = 'successGrouped',
}

export interface Comment {
  _id?: string;
  actor: CommentActor;
  comment: string;
  createdAt: Date;
  deletedAt?: Date;
  likes: CommentLike[];
  moderation?: CommentModeration;
  replies?: Reply[];
  /**
   * general means comments on the general platform c2b = customer to business comment b2c =
   * business to customer comment
   */
  type: Type;
  updatedAt: Date;
}

export interface CommentActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface CommentLike {
  actor: PurpleActor;
  createdAt: Date;
  like: boolean;
  toggleCount: number;
  updatedAt: Date;
}

export interface PurpleActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface CommentModeration {
  banned: boolean;
  labels: string[];
  waiting: boolean;
}

export interface Reply {
  _id?: string;
  actor: ReplyActor;
  comment: string;
  createdAt: Date;
  deletedAt?: Date;
  likes: ReplyLike[];
  moderation?: ReplyModeration;
  /**
   * general means comments on the general platform c2b = customer to business comment b2c =
   * business to customer comment
   */
  type: Type;
  updatedAt: Date;
}

export interface ReplyActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ReplyLike {
  actor: FluffyActor;
  createdAt: Date;
  like: boolean;
  toggleCount: number;
  updatedAt: Date;
}

export interface FluffyActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ReplyModeration {
  banned: boolean;
  labels: string[];
  waiting: boolean;
}

/**
 * general means comments on the general platform c2b = customer to business comment b2c =
 * business to customer comment
 */
export enum Type {
  B2C = 'b2c',
  C2B = 'c2b',
  General = 'general',
}

export interface Editable {
  channel?: EditableChannel;
  geolocationData?: EditableGeolocationData;
  /**
   * The text of the item, this includes URL and user added personnel text
   */
  text: string;
}

export interface EditableChannel {
  /**
   * The type of channel this is, general or event. Scope to expand more types in the future,
   * e.g. research
   */
  channelType?: ChannelType;
  customFields?: FluffyCustomField[];
  /**
   * Is this channel a default channel
   */
  isDefault?: boolean;
  /**
   * The name of the channel
   */
  name: string;
  /**
   * The slug of the channel
   */
  slug: string;
}

export interface FluffyCustomField {
  /**
   * UUID v4
   */
  _id: string;
  fieldType: FieldType;
  label?: string;
  modifier?: number;
  options?: string[];
  /**
   * The unit will be derived from the static data API
   */
  unit: string;
  value: string;
}

export interface EditableGeolocationData {
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

export interface Getgot {
  _id?: string;
  actor: GetgotActor;
  createdAt: Date;
  forActor: ForActor;
  latestStage: LatestStage;
  private: boolean;
  stages: Stage[];
  updatedAt: Date;
}

export interface GetgotActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ForActor {
  firstName: string;
  lastName: string;
  username: string;
}

export enum LatestStage {
  StageGet = 'stageGet',
  StageGot = 'stageGot',
}

export interface Stage {
  date: Date;
  name: LatestStage;
}

export interface ConciergeItemLike {
  actor: TentacledActor;
  createdAt: Date;
  like: boolean;
  toggleCount: number;
  updatedAt: Date;
}

export interface TentacledActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ConciergeItemModeration {
  banned: boolean;
  labels: string[];
  waiting: boolean;
}

export interface ConciergeItemPerformanceValues {
  commentsAndReplies: number;
  commentsAndRepliesLikes: number;
  likes: number;
  pins: number;
  /**
   * Number of times this URL has been posted, including this post, over the defined time
   * period
   */
  popularityOverXTime: number;
}

export interface Pin {
  actor: PinActor;
  createdAt: Date;
  pin: boolean;
  toggleCount: number;
  updatedAt: Date;
}

export interface PinActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface Reminder {
  outstanding?: Outstanding;
  passed: Passed[];
}

export interface Outstanding {
  date: Date;
  reminderType: ReminderType;
}

export enum ReminderType {
  CustomDate = 'customDate',
  OneMonth = 'oneMonth',
  OneWeek = 'oneWeek',
  ThreeMonths = 'threeMonths',
}

export interface Passed {
  date: Date;
  reminderType: ReminderType;
}

/**
 * The URL is extracted from the user text sent. The fetch of the preview is then completely
 * autonomous to prevent a hacker from injecting false content, eg submitting a recognisable
 * url image but a dangerous url. As such, the URL data itself is never editable directly by
 * the user which in addition gives the API more control on what is and what is not
 * displayed.
 */
export interface UrlCache {
  /**
   * Enum to ensure we don't continuously retry the same failed url forever
   */
  failedScrapeRetryStatus?: FailedScrapeRetryStatus;
  fetchStatus?: FetchStatus;
  image?: Image;
  meta?: Meta;
  url: string;
}

/**
 * Enum to ensure we don't continuously retry the same failed url forever
 */
export enum FailedScrapeRetryStatus {
  OneDay = 'oneDay',
  OneMonth = 'oneMonth',
  OneWeek = 'oneWeek',
  ThreeHours = 'threeHours',
  TwentyMinutes = 'twentyMinutes',
}

export enum FetchStatus {
  Failed = 'failed',
  InProgress = 'inProgress',
  Success = 'success',
}

export interface Image {
  format?: string;
  height?: number;
  href?: string;
  width?: number;
}

export interface Meta {
  availability?: string;
  brand?: string;
  canonical?: string;
  currency?: string;
  description?: string;
  keywords?: string[];
  price?: string;
  site?: string;
  title: string;
  /**
   * The title but with any camelCase or non-standard word_breaks turned into spaces for easy
   * searching against. i.e. Searching 'Sushi' returns 'Lisbon FunSushiBar' or 'Escape
   * Dungeons' returns 'Escape Room @york.dungeons.minster'
   */
  titleBreakWords?: string;
}

export interface UserPhoto {
  /**
   * File path to the image server
   */
  filePath: string;
}
