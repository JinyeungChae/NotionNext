/**
 * Website Analytics & SEO Plugin Configuration
 */
module.exports = {
  // Vercel Analytics: Built-in analytics by Vercel.
  // See: https://vercel.com/docs/concepts/analytics/quickstart
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, 

  // Busuanzi Analytics: Displays total page views (PV) and unique visitors (UV) on the blog footer.
  // See: http://busuanzi.ibruce.info/
  ANALYTICS_BUSUANZI_ENABLE:
    process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, 

  // Baidu Analytics: Input your Baidu Tongji ID only. (Optional - for Chinese search engines)
  // [baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', 

  // CNZZ Analytics: Input your CNZZ station ID only. (Optional)
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', 

  // 💡 Google Analytics (GA4): Input your GA4 Measurement ID here.
  // Format: 'G-XXXXXXXXXX'
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || 'G-0D45RBEKN6', 

  // 51la Web Analytics (Optional)
  // Get your ID and CK from the 51la dashboard. See: https://docs.tangly1024.com/article/notion-next-51-la
  ANALYTICS_51LA_ID: process.env.NEXT_PUBLIC_ANALYTICS_51LA_ID || '', 
  ANALYTICS_51LA_CK: process.env.NEXT_PUBLIC_ANALYTICS_51LA_CK || '', 

  // Matomo Web Analytics (Self-hosted or Cloud Analytics - Optional)
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', // Matomo server URL (Do not end with a slash)
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', // Matomo Site ID

  // ACKEE Web Analytics (Privacy-focused self-hosted analytics - Optional)
  ANALYTICS_ACKEE_TRACKER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g., 'https://ackee.example.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g., 'https://ackee.example.com' (Do not end with a slash)
  ANALYTICS_ACKEE_DOMAIN_ID:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g., '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  // 💡 Google Site Verification: For Google Search Console ownership verification.
  // Paste the content value from the verification meta tag.
  SEO_GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', 

  // Baidu Site Verification: For Baidu Webmaster Tools verification. (Optional)
  SEO_BAIDU_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', 

  // 💡 Microsoft Clarity: Heatmaps and user session recordings.
  // Copy and paste only the 10-character alphanumeric project ID from the Clarity script.
  CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || null, 

  // Umami Analytics (Open-source, privacy-focused alternative to GA - Optional)
  UMAMI_HOST: process.env.NEXT_PUBLIC_UMAMI_HOST || 'https://cloud.umami.is/script.js', // Umami script URL
  UMAMI_ID: process.env.NEXT_PUBLIC_UMAMI_ID || '', // Umami Website ID

  // <---- Website Analytics End
}