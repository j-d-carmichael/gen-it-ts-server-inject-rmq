export interface MsAuthenticationConnectionCacheModel {
  connections: Connection[];
  username: string;
}

export interface Connection {
  firstName: string;
  lastName: string;
  state: State;
  updated: Date;
  username: string;
}

export enum State {
  RequestReceived = 'requestReceived',
  RequestReceivedAccepted = 'requestReceivedAccepted',
  RequestReceivedAcceptedDisconnectedByReceiver = 'requestReceivedAcceptedDisconnectedByReceiver',
  RequestReceivedAcceptedDisconnectedByRequester = 'requestReceivedAcceptedDisconnectedByRequester',
  RequestReceivedCancelled = 'requestReceivedCancelled',
  RequestReceivedRejected = 'requestReceivedRejected',
  RequestSent = 'requestSent',
  RequestSentAccepted = 'requestSentAccepted',
  RequestSentAcceptedDisconnectByRequester = 'requestSentAcceptedDisconnectByRequester',
  RequestSentAcceptedDisconnectedByReceiver = 'requestSentAcceptedDisconnectedByReceiver',
  RequestSentCancelled = 'requestSentCancelled',
  RequestSentRejected = 'requestSentRejected',
}
