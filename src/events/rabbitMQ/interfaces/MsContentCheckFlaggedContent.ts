export interface MsContentCheckFlaggedContent {
  _id?: string;
  contentCheckId: string;
  contentId?: string;
  contentType?: ContentType;
  createdAt?: Date;
  issues?: Issues;
  moderation?: Moderation;
  /**
   * When a subpart of an object needs content checking, e.g. a comment within an item, the
   * object path used in conjunction with the content id will be enough to find the exact data
   * to be checked over
   */
  objectPath?: string;
  updatedAt?: Date;
}

export enum ContentType {
  Channel = 'channel',
  ChannelHero = 'channelHero',
  ChannelImage = 'channelImage',
  ChatMessage = 'chatMessage',
  DefaultDomainImage = 'defaultDomainImage',
  Item = 'item',
  ItemComment = 'itemComment',
  ItemCommentReply = 'itemCommentReply',
  ItemImage = 'itemImage',
  ProfilePic = 'profilePic',
  UrlThumbnail = 'url-thumbnail',
  UserData = 'userData',
}

export interface Issues {
  image?: Image;
  text?: Text[];
  url?: Url[];
}

export interface Image {
  labels: Label[];
  relationPath?: string;
}

export interface Label {
  Confidence: number;
  Name: string;
  ParentName: string;
}

export interface Text {
  attributes: Attribute[];
  objectPath: string;
}

export interface Attribute {
  attribute: string;
  probability: number;
}

export interface Url {
  objectPath?: string;
  originalValue?: string;
  threatType?: string;
}

export interface Moderation {
  banned: boolean;
  labels: string[];
  waiting: boolean;
}
