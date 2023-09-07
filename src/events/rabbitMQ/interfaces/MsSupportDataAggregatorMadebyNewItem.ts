export interface MsSupportDataAggregatorMadebyNewItem {
  batchName: string;
  data: { [key: string]: any };
  domain: string;
  fromUrl: string;
  importerActor: ImporterActor;
  platform: Platform;
}

export interface ImporterActor {
  firstName: string;
  lastName: string;
  username: string;
}

export enum Platform {
  Shopify = 'shopify',
  Woocommerce = 'woocommerce',
}
