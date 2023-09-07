export interface MsItemModels {
  items: Item[];
}

export interface Item {
  actor: ItemActor;
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
  likes: ItemLike[];
  moderation?: ItemModeration;
  performanceValues: PerformanceValues;
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

export interface ItemActor {
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
  channel?: Channel;
  geolocationData?: GeolocationData;
  /**
   * The text of the item, this includes URL and user added personnel text
   */
  text: string;
}

export interface Channel {
  /**
   * The type of channel this is, general or event. Scope to expand more types in the future,
   * e.g. research
   */
  channelType?: ChannelType;
  customFields?: CustomField[];
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

/**
 * The type of channel this is, general or event. Scope to expand more types in the future,
 * e.g. research
 */
export enum ChannelType {
  Event = 'event',
  General = 'general',
  ResearchConcierge = 'researchConcierge',
}

export interface CustomField {
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

export interface GeolocationData {
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
  position: Position;
}

export interface Position {
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

export interface ItemLike {
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

export interface ItemModeration {
  banned: boolean;
  labels: string[];
  waiting: boolean;
}

export interface PerformanceValues {
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
