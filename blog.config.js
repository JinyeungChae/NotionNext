// Note: process.env.XX refers to Vercel environment variables.
// Configuration guide:
// https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', 
  // Default API endpoint.
  // You can configure your own endpoint, for example:
  // https://[xxxxx].notion.site/api/v3

  // Important page_id!!!
  // Duplicate the template from:
  // https://tanghh.notion.site/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '04b8212159fd83b7868581270023d564',

  THEME: process.env.NEXT_PUBLIC_THEME || 'claude',
  // Current theme.
  // Available themes can be found in the /themes directory.
  // Theme name = folder name (e.g. claude, endspace, fukasawa, gitbook, medium, etc.)

  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US',
  // Example: 'zh-CN', 'en-US'
  // See /lib/lang.js for available languages.

  SINCE: process.env.NEXT_PUBLIC_SINCE || 2026,
  // Starting year of the website.
  // If left empty, the current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  // Enable pseudo-static URLs.
  // When enabled, all article URLs end with ".html".

  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60,
  // Cache refresh interval (seconds).
  // Each page remains fully static for 60 seconds.
  // During this period, Notion data will not be fetched again.
  // Increasing this value can reduce Vercel resource usage and improve performance,
  // but content updates will appear with more delay.

  REVALIDATION_TOKEN: process.env.REVALIDATION_TOKEN || '',
  // On-Demand Revalidation Token.
  // Allows POST /api/revalidate to refresh page cache immediately.
  // Useful for reducing Notion content update delays.

  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto',
  // Available options:
  // 'light' = Light mode
  // 'dark' = Dark mode
  // 'auto' = Automatically switch based on time and theme

  APPEARANCE_DARK_TIME:
    process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],
  // Dark mode active time range.
  // Set to false to disable automatic switching.

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'START-NOTION',

  BIO: process.env.NEXT_PUBLIC_BIO || 'Every Great Business Starts as a Notion.',
  // Personal bio (Markdown supported)

  LINK:
    process.env.NEXT_PUBLIC_LINK ||
    'https://start-notion.com',
  // Website URL

  KEYWORDS:
    process.env.NEXT_PUBLIC_KEYWORD || 'START-NOTION, Notion, Blog',
  // Website keywords (comma-separated)

  BLOG_FAVICON:
    process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',
  // Blog favicon.
  // Default: /public/favicon.ico
  // Supports external image URLs.

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  // ICP registration number (China)

  BEI_AN_LINK:
    process.env.NEXT_PUBLIC_BEI_AN_LINK ||
    'https://beian.miit.gov.cn/',
  // ICP registration lookup URL

  BEI_AN_GONGAN:
    process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '',
  // Public Security Bureau registration number
  // Example: "浙公网安备xxxxxxxx号"

  // RSS Subscription
  ENABLE_RSS:
    process.env.NEXT_PUBLIC_ENABLE_RSS || true,
  // Enable RSS feed

  // Other advanced configurations
  // The main config file is intentionally kept shorter.
  // Additional configurations are separated into the /conf directory.
  // Modify only the files you need.

  ...require('./conf/comment.config'),
  // Comment system configuration

  ...require('./conf/contact.config'),
  // Author contact information

  ...require('./conf/post.config'),
  // Post and article list configuration

  ...require('./conf/analytics.config'),
  // Website analytics

  ...require('./conf/image.config'),
  // Image-related settings

  ...require('./conf/font.config'),
  // Font settings

  ...require('./conf/right-click-menu'),
  // Custom right-click menu settings

  ...require('./conf/code.config'),
  // Code block styling

  ...require('./conf/animation.config'),
  // Animation and visual effects

  ...require('./conf/widget.config'),
  // Floating widgets:
  // chat support, virtual pets, music player, etc.

  ...require('./conf/ad.config'),
  // Advertising and monetization

  ...require('./conf/plugin.config'),
  // Third-party plugins such as Algolia search

  ...require('./conf/ai.config'),
  // AI-related features
  // AI summaries, chatbot integrations, etc.

  ...require('./conf/performance.config'),
  // Performance optimization

  ...require('./conf/top-tag.config'),
  // Global pinned article settings

  // Advanced usage
  ...require('./conf/layout-map.config'),
  // Custom route-to-layout mappings

  ...require('./conf/notion.config'),
  // Notion database extensions
  // Example: custom database columns

  ...require('./conf/dev.config'),
  // Development and debugging settings

  // Custom external scripts and stylesheets
  CUSTOM_EXTERNAL_JS: [''],
  // Example:
  // ['https://example.com/script.js']

  CUSTOM_EXTERNAL_CSS: [''],
  // Example:
  // ['https://example.com/style.css']

  // Custom navigation menu
  CUSTOM_MENU:
    process.env.NEXT_PUBLIC_CUSTOM_MENU || true,
  // Supports Menu-type navigation.
  // Replaces the old Page-type navigation used before v3.12.

  // Article page settings
  CAN_COPY:
    process.env.NEXT_PUBLIC_CAN_COPY || true,
  // Allow users to copy content.
  // Set to false to disable copying site-wide.

  ...require('./conf/techgrow.config'),
  // TechGrow plugin
  // Used for directing traffic to a WeChat public account

  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,
  // Reverse sidebar layout (left ↔ right)
  // Supported themes:
  // hexo, next, medium, fukasawa, example

  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi, Welcome to my blog 🎉',
  // Typing animation greetings.
  // Supported by Hexo and Matery themes.
  // Separate multiple greetings with commas.

  UUID_REDIRECT:
    process.env.UUID_REDIRECT || false
  // Redirect UUID URLs to slug URLs
}

module.exports = BLOG