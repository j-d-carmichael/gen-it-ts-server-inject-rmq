export interface ChannelModel {
  /**
   * The path to the image. This will either be a user uploaded image or a placeholder image
   * path.
   */
  imagePath?: string;
  /**
   * This is injected during creation of the channel and will be the username of the creator
   */
  ownerUsername?: string;
  slug?: string;
}
