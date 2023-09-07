export interface MsItemCommentC2BSendEmailModel {
  actor: Actor;
  businessEmail: string;
  comment: string;
  commentDate?: Date;
  commentType: CommentType;
  domain?: string;
  uniqueItemName: string;
  url: string;
}

export interface Actor {
  firstName: string;
  lastName: string;
  username: string;
}

export enum CommentType {
  Comment = 'comment',
  Reply = 'reply',
}
