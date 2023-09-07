export interface MsChannelChatUnreadModel {
  channels?: Channel[];
  toActor?: ToActor;
}

export interface Channel {
  name?: string;
  slug?: string;
}

export interface ToActor {
  firstName: string;
  lastName: string;
  username: string;
}
