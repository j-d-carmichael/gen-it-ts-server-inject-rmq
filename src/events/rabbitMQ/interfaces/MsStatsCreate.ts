export interface MsStatsCreate {
  /**
   * The number of channel items
   */
  channel_item_count?: number;
  /**
   * The number of channel members
   */
  channel_mem_count?: number;
  /**
   * The privacy of the channel where gen is general, pri is private, pub is public
   */
  channel_type?: ChannelType;
  /**
   * The id relating to the actor of the stat
   */
  id_acting?: string;
  /**
   * The secondary acting id, eg the id of the person an item was clone from
   */
  id_acting_secondary?: string;
  /**
   * The object id this related to, eg item id or account id
   */
  id_object?: string;
  /**
   * To further specify where a stat was triggered from. On release only used on Sidebar to
   * indicate whether action was  triggered on product page. Future release may expand to
   * include others, e.g. maybe Dashboard/Channel/Profile so we  can internally dig down into
   * where interactions happen most.
   */
  secondarySource?: SecondarySource;
  /**
   * The source is where the event was triggered from, either a service or frontend
   */
  source: Source;
  /**
   * The url this stat relates to, eg the item url
   */
  url?: string;
  /**
   * The url the action was derived from, if available
   */
  url_from?: string;
  userAgent?: string;
  userClient?: UserClient;
  userIp?: string;
  /**
   * Optional additional words persisted against the stat, eg a comment or a title
   */
  words?: string;
  /**
   * The overall weighting of the words, eg the comment or the description of the item
   */
  words_weight?: number;
}

/**
 * The privacy of the channel where gen is general, pri is private, pub is public
 */
export enum ChannelType {
  Gen = 'gen',
  Pri = 'pri',
  Pub = 'pub',
}

/**
 * To further specify where a stat was triggered from. On release only used on Sidebar to
 * indicate whether action was  triggered on product page. Future release may expand to
 * include others, e.g. maybe Dashboard/Channel/Profile so we  can internally dig down into
 * where interactions happen most.
 */
export enum SecondarySource {
  The3PSBProductPage = '3pSBProductPage',
}

/**
 * The source is where the event was triggered from, either a service or frontend
 */
export enum Source {
  B2CMessageClickout = 'b2cMessageClickout',
  B2CMessageNotInterested = 'b2cMessageNotInterested',
  B2CMessageView = 'b2cMessageView',
  ExtChrItemAdd = 'extChrItemAdd',
  ExtFfItemAdd = 'extFfItemAdd',
  ExtSafItemAdd = 'extSafItemAdd',
  ItemAdd = 'itemAdd',
  ItemClickout = 'itemClickout',
  ItemCommentCreate = 'itemCommentCreate',
  ItemCommentEdit = 'itemCommentEdit',
  ItemDetailView = 'itemDetailView',
  ItemLike = 'itemLike',
  ItemLineView = 'itemLineView',
  ItemPinned = 'itemPinned',
  ItemReAdd = 'itemReAdd',
  ItemUnLike = 'itemUnLike',
  ItemUnpinned = 'itemUnpinned',
  PinnedItemLineView = 'pinnedItemLineView',
  The3PSBClose = '3pSBClose',
  The3PSBItemAdd = '3pSBItemAdd',
  The3PSBItemFriendClick = '3pSBItemFriendClick',
  The3PSBItemMyClick = '3pSBItemMyClick',
  The3PSBItemOtherClick = '3pSBItemOtherClick',
  The3PSBItemReAdd = '3pSBItemReAdd',
  The3PSBLoad = '3pSBLoad',
  The3PSBOpen = '3pSBOpen',
  The3PSBWhatIsLiffery = '3pSBWhatIsLiffery',
  The3PSBWishIconClick = '3pSBWishIconClick',
}

export interface UserClient {
  /**
   * The clients screen height
   */
  sH?: string;
  /**
   * The clients screen width
   */
  sW?: string;
  /**
   * The clients window height
   */
  wH?: string;
  /**
   * The clients window width
   */
  wW?: string;
}
