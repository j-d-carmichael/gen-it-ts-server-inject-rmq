export interface MsImageWriteNewModel {
  imagePath: string;
  imageType: ImageType;
  objectId: string;
  relationPath?: string;
}

export enum ImageType {
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
