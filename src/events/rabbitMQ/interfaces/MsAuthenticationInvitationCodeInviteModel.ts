export interface MsAuthenticationInvitationCodeInviteModel {
  code: string;
  fromActor: FromActor;
  message: string;
  toActor: ToActor;
}

export interface FromActor {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ToActor {
  email: string;
  firstName: string;
  lastName: string;
}
