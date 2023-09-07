export interface MsChatMentionOnComment {
  channelSlug: string;
  fromActor: FromActor;
  messageId: string;
  toActor: ToActor;
}

export interface FromActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ToActor {
  firstName: string;
  lastName: string;
  username: string;
}
