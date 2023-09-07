export interface MsChatMessageModel {
  /**
   * Message's ID
   */
  _id: string;
  author: Author;
  createdAt: Date;
  msg: string;
  /**
   * For example, the channel id the chat relates to
   */
  relationId: string;
  type: Type;
}

export interface Author {
  firstName: string;
  lastName: string;
  username: string;
}

export enum Type {
  Channel = 'channel',
}
