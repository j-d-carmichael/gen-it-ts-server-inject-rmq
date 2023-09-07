export interface MsContentCategorisationItemContentCategorisedOfSameImage {
  categories: Category[];
  success: boolean;
  uniqueItemNames: string[];
  urlImageHref: string;
}

export interface Category {
  categoryType: CategoryType;
  confidence: number;
  /**
   * May expand as required in future, e.g. UrlMetaDescription, if NLP's advance or we train
   * our own
   */
  contentType: ContentType;
  instances?: Instances;
  name: string;
  relatedCategories?: RelatedCategory[];
}

export enum CategoryType {
  Label = 'label',
  Logo = 'logo',
}

/**
 * May expand as required in future, e.g. UrlMetaDescription, if NLP's advance or we train
 * our own
 */
export enum ContentType {
  Image = 'image',
}

export interface Instances {
  amazon?: Amazon[];
  google?: Google[];
}

export interface Amazon {
  BoundingBox: BoundingBox;
  Confidence: number;
}

export interface BoundingBox {
  Height: number;
  Left: number;
  Top: number;
  Width: number;
}

export interface Google {
  vertices: Vertex[];
}

export interface Vertex {
  x: number;
  y: number;
}

export interface RelatedCategory {
  name: string;
}
