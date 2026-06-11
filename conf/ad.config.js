/**
 * Advertisement Integration Plugin
 */
module.exports = {
  // Google AdSense Configuration
  // 💡 Your Google AdSense Publisher ID (e.g., 'ca-pub-xxxxxxxxxxxxxxxx')
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || 'ca-pub-7057933429446483', 
  
  // 💡 Sandbox/Test Mode: Set to true to display fake test ads during local development.
  // Reference: https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, 

  // 💡 In-Article Ads: 
  // Go to AdSense > Ads > By ad unit > In-article ads. Copy and paste the 'data-ad-slot' value from the HTML code.
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '8366603427', 

  // 💡 In-Feed Ads: 
  // Go to AdSense > Ads > By ad unit > In-feed ads. Copy and paste the 'data-ad-slot' value.
  ADSENSE_GOOGLE_SLOT_FLOW:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '5740440080', 

  // 💡 Multiplex (Native) Ads: 
  // Go to AdSense > Ads > By ad unit > Multiplex ads. Copy and paste the 'data-ad-slot' value.
  ADSENSE_GOOGLE_SLOT_NATIVE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '5988391094', 

  // 💡 Display Ads (Auto/Responsive): 
  // Go to AdSense > Ads > By ad unit > Display ads. Copy and paste the 'data-ad-slot' value.
  ADSENSE_GOOGLE_SLOT_AUTO:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '4675309423', 

  // WWAds Configuration (Mainly for Chinese Tech Blogs - Optional)
  // Create your WWAds unit ID at https://wwads.cn/
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, 
  
  // Enable AdBlocker detection for WWAds. Shows a text notice if an adblocker is active.
  // See: https://github.com/bytegravity/whitelist-wwads
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false 
}