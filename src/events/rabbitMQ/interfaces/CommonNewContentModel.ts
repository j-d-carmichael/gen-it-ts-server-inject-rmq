export interface CommonNewContentModel {
  fromActor?: FromActor;
  toUsernames?: string[];
}

export interface FromActor {
  firstName: string;
  lastName: string;
  username: string;
}
