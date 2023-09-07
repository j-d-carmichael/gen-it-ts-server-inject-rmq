export interface MsAuthenticationConnectionRequest {
  fromActor?: FromActor;
  toActor?: ToActor;
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
