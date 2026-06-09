/**
 * Image-related configurations
 *
 * e.g., images.unsplash.com (all matching image hosting URLs from Notion will be replaced).
 * If you added a temporary random image URL in Notion and that service goes down, 
 * you can configure this fallback URL here to batch-replace all broken images at once.
 * * Note: By default, this will also replace your homepage cover and avatar uploaded directly to Notion.
 * It is highly recommended to host your homepage cover and avatar on reliable external platforms 
 * and simply configure the direct link inside Notion or config files.
 */
module.exports = {
  // Notion Domain: You can change this if using a custom reverse proxy for Notion. Do not modify if unsure.
  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', 
  
  // Default compression width (pixels) for blog covers and post content. Lower equals faster loading.
  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 1080, 
  
  // Image resolution width when clicked and zoomed-in inside a post (Not the actual rendered display width).
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1920, 
  
  // Image compression quality (0-100). Lower means smaller file size but lower visual quality.
  IMAGE_COMPRESS_QUALITY: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_QUALITY || 80, 
  
  // Random Image API URL: If the keyword below isn't configured, home cover, avatar, and post covers will be replaced with this.
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', 
  
  // URL Keyword trigger for random image replacement (supports comma-separated values). Only URLs containing this keyword will be replaced.
  RANDOM_IMAGE_REPLACE_TEXT:
    process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT ||
    'images.unsplash.com', 

  // Website Images Global Settings
  
  // Lazy-load placeholder image string (Supports base64 or online URLs).
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 
    
  // Deprecated configuration. Do not use. Only 'Notion' option is supported now.
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', 
  
  // Automatically add drop-shadow effect to images inside articles.
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, 
  
  // Notion specific image compression width limit.
  IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800 
}