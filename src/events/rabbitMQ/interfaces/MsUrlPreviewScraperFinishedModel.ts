export interface MsUrlPreviewScraperFinishedModel {
  data?: Data;
  success: boolean;
  type: Type;
}

export interface Data {
  image?: Image;
  meta?: Meta;
  url: string;
}

export interface Image {
  format?: string;
  height?: number;
  href?: string;
  width?: number;
}

export interface Meta {
  availability?: string;
  brand?: string;
  canonical?: string;
  currency?: string;
  description?: string;
  keywords?: string[];
  price?: string;
  site?: string;
  title: string;
  /**
   * The title but with any camelCase or non-standard word_breaks turned into spaces for easy
   * searching against. i.e. Searching 'Sushi' returns 'Lisbon FunSushiBar' or 'Escape
   * Dungeons' returns 'Escape Room @york.dungeons.minster'
   */
  titleBreakWords?: string;
}

export enum Type {
  Item = 'item',
}
