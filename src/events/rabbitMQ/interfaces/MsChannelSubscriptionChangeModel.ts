export interface MsChannelSubscriptionChangeModel {
  channels: Channel[];
  channelSlugsOwned: string[];
  username: string;
}

export interface Channel {
  archivedAt?: Date;
  canAdd?: boolean;
  canManage?: boolean;
  privacy: Privacy;
  slug: string;
  subscriptionStatus: SubscriptionStatus;
}

export enum Privacy {
  FriendsOnly = 'friendsOnly',
  Private = 'private',
  Public = 'public',
  PublicAutojoin = 'publicAutojoin',
}

export enum SubscriptionStatus {
  ConciergeJobAccepted = 'ConciergeJobAccepted',
  ConciergeJobCancelled = 'ConciergeJobCancelled',
  ConciergeJobCompleted = 'ConciergeJobCompleted',
  ConciergeJobRemoved = 'ConciergeJobRemoved',
  InviteAccepted = 'InviteAccepted',
  InviteCancelled = 'InviteCancelled',
  InviteRejected = 'InviteRejected',
  Invited = 'Invited',
  JoinRequestAccepted = 'JoinRequestAccepted',
  JoinRequestCancelled = 'JoinRequestCancelled',
  JoinRequestRejected = 'JoinRequestRejected',
  JoinRequestSent = 'JoinRequestSent',
  RemovedByChannel = 'RemovedByChannel',
  SelfRemoval = 'SelfRemoval',
}
