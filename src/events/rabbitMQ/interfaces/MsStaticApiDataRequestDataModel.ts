export interface MsStaticApiDataRequestDataModel {
  requesting?: Requesting;
}

export enum Requesting {
  ChannelUnits = 'channelUnits',
  ContentCategoryGroupings = 'contentCategoryGroupings',
  ContentCategoryLabels = 'contentCategoryLabels',
}
