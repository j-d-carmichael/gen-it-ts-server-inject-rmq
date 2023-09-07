export interface MsNotificationNotificationCreated {
  notification: Notification;
  /**
   * The type of notification, currenly only direct to a single user, later may include
   * broadcast
   */
  type: MsNotificationNotificationCreatedType;
}

export interface Notification {
  _id?: string;
  createdAt: Date;
  initiator: Initiator;
  /**
   * The last item in the array of states will always be the newest
   */
  interactionStates: InteractionState[];
  payload?: Payload;
  recipient: Recipient;
  /**
   * The type of the notification
   */
  type: NotificationType;
  updatedAt: Date;
}

export interface Initiator {
  firstName?: string;
  lastName?: string;
  username: string;
}

export interface InteractionState {
  /**
   * Timestamp of the current state of the notification
   */
  date: Date;
  /**
   * Notification state enum
   */
  state: State;
}

/**
 * Notification state enum
 */
export enum State {
  Interacted = 'interacted',
  Seen = 'seen',
  Unseen = 'unseen',
}

export interface Payload {
  /**
   * Variable data such as identifiers eg item unique name
   */
  variables: Variable[];
}

export interface Variable {
  key: Key;
  value: string;
}

export enum Key {
  AdditionalText = 'additionalText',
  BusinessName = 'businessName',
  ChannelEventDate = 'channelEventDate',
  ChannelEventNotification = 'channelEventNotification',
  ChannelEventType = 'channelEventType',
  ChannelName = 'channelName',
  ChannelNameSlug = 'channelNameSlug',
  ChannelSlug = 'channelSlug',
  ChannelType = 'channelType',
  CommentId = 'commentId',
  CommentReplyId = 'commentReplyId',
  ItemInteractionType = 'itemInteractionType',
  ItemManagerType = 'itemManagerType',
  ItemUniqueName = 'itemUniqueName',
  ItemUrl = 'itemUrl',
  MessageId = 'messageId',
}

export interface Recipient {
  firstName?: string;
  lastName?: string;
  username: string;
}

/**
 * The type of the notification
 */
export enum NotificationType {
  AuthConnectionRequestAccepted = 'authConnectionRequestAccepted',
  AuthConnectionRequestIncoming = 'authConnectionRequestIncoming',
  B2CMessage = 'b2cMessage',
  ChannelEventDate = 'channelEventDate',
  ChannelEventNotification = 'channelEventNotification',
  ChannelInviteAccepted = 'channelInviteAccepted',
  ChannelInvited = 'channelInvited',
  ChannelJoinAccepted = 'channelJoinAccepted',
  ChannelJoinPublic = 'channelJoinPublic',
  ChannelJoinRequested = 'channelJoinRequested',
  ChannelUnreadChat = 'channelUnreadChat',
  ChatChannelMention = 'chatChannelMention',
  ConciergeJobAlarmJobIncomplete = 'conciergeJobAlarmJobIncomplete',
  ConciergeJobAlarmJobUnassigned = 'conciergeJobAlarmJobUnassigned',
  ConciergeJobAssignedConcierge = 'conciergeJobAssignedConcierge',
  ConciergeJobAssignedOwner = 'conciergeJobAssignedOwner',
  ConciergeJobCreated = 'conciergeJobCreated',
  ConciergeJobFinishedConcierge = 'conciergeJobFinishedConcierge',
  ConciergeJobFinishedOwner = 'conciergeJobFinishedOwner',
  ConciergeJobItemPosted = 'conciergeJobItemPosted',
  ItemComment = 'itemComment',
  ItemCommentLike = 'itemCommentLike',
  ItemCommentMention = 'itemCommentMention',
  ItemCommentOnComment = 'itemCommentOnComment',
  ItemCommentReplied = 'itemCommentReplied',
  ItemCommentReplyLiked = 'itemCommentReplyLiked',
  ItemDeletedByOther = 'itemDeletedByOther',
  ItemEditedByOther = 'itemEditedByOther',
  ItemLike = 'itemLike',
  ItemReminder = 'itemReminder',
}

/**
 * The type of notification, currenly only direct to a single user, later may include
 * broadcast
 */
export enum MsNotificationNotificationCreatedType {
  Direct = 'direct',
}
