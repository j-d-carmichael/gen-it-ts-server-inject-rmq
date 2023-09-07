export interface MsB2CMessagingNewMessageNotification {
  businessName: string;
  /**
   * The different types of interactions a user may have had with the given URL which warrants
   * them receiving a notification
   */
  interactionType: InteractionType;
  recipient: Recipient;
  uniqueItemName: string;
}

/**
 * The different types of interactions a user may have had with the given URL which warrants
 * them receiving a notification
 */
export enum InteractionType {
  ChannelMember = 'channelMember',
  ItemComment = 'itemComment',
  ItemCommentReply = 'itemCommentReply',
  ItemLike = 'itemLike',
  ItemPin = 'itemPin',
  ItemPost = 'itemPost',
  ItemShoppingListStageGet = 'itemShoppingListStageGet',
  ItemShoppingListStageGot = 'itemShoppingListStageGot',
}

export interface Recipient {
  firstName: string;
  lastName: string;
  username: string;
}
