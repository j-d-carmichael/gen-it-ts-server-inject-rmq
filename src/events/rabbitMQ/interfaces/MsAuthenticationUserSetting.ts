export interface MsAuthenticationUserSetting {
  itemEntry: ItemEntry;
  /**
   * The shape of this object needs defining
   */
  lastChannelAddedTo: { [key: string]: any };
  searchSettings?: { [key: string]: any };
  toursSeen?: ToursSeen;
  user?: User;
}

export interface ItemEntry {
  /**
   * The source is where the event was triggered from, either a service or frontend
   */
  addType: AddType;
  editable: Editable;
  /**
   * The URL path the item was added from
   */
  fromPath?: string;
  reminder?: ItemEntryReminder;
}

/**
 * The source is where the event was triggered from, either a service or frontend
 */
export enum AddType {
  B2CMessageClickout = 'b2cMessageClickout',
  B2CMessageNotInterested = 'b2cMessageNotInterested',
  B2CMessageView = 'b2cMessageView',
  ExtChrItemAdd = 'extChrItemAdd',
  ExtFfItemAdd = 'extFfItemAdd',
  ExtSafItemAdd = 'extSafItemAdd',
  ItemAdd = 'itemAdd',
  ItemClickout = 'itemClickout',
  ItemCommentCreate = 'itemCommentCreate',
  ItemCommentEdit = 'itemCommentEdit',
  ItemDetailView = 'itemDetailView',
  ItemLike = 'itemLike',
  ItemLineView = 'itemLineView',
  ItemPinned = 'itemPinned',
  ItemReAdd = 'itemReAdd',
  ItemUnLike = 'itemUnLike',
  ItemUnpinned = 'itemUnpinned',
  PinnedItemLineView = 'pinnedItemLineView',
  The3PSBClose = '3pSBClose',
  The3PSBItemAdd = '3pSBItemAdd',
  The3PSBItemFriendClick = '3pSBItemFriendClick',
  The3PSBItemMyClick = '3pSBItemMyClick',
  The3PSBItemOtherClick = '3pSBItemOtherClick',
  The3PSBItemReAdd = '3pSBItemReAdd',
  The3PSBLoad = '3pSBLoad',
  The3PSBOpen = '3pSBOpen',
  The3PSBWhatIsLiffery = '3pSBWhatIsLiffery',
  The3PSBWishIconClick = '3pSBWishIconClick',
}

export interface Editable {
  channel?: EditableChannel;
  geolocationData?: GeolocationData;
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

export interface ItemEntryReminder {
  isSet: boolean;
  reminder?: ReminderReminder;
}

export interface ReminderReminder {
  date: Date;
  reminderType: ReminderType;
}

export enum ReminderType {
  CustomDate = 'customDate',
  OneMonth = 'oneMonth',
  OneWeek = 'oneWeek',
  ThreeMonths = 'threeMonths',
}

export interface ToursSeen {
  /**
   * Tours relating to channels
   */
  channel?: ToursSeenChannel;
  /**
   * Tours relating to the dashboard
   */
  dashboard?: Dashboard;
  /**
   * Tours relating to the profile page
   */
  profile?: Profile;
  /**
   * Take the Tour as seen by new users on first login
   */
  welcome?: Welcome;
}

/**
 * Tours relating to channels
 */
export interface ToursSeenChannel {
  chatOpened: number;
}

/**
 * Tours relating to the dashboard
 */
export interface Dashboard {
  overview: number;
}

/**
 * Tours relating to the profile page
 */
export interface Profile {
  overview: number;
}

/**
 * Take the Tour as seen by new users on first login
 */
export interface Welcome {
  takeTheTour: number;
}

export interface User {
  firstName: string;
  lastName: string;
  username: string;
}
