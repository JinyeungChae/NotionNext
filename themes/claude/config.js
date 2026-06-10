const CONFIG = {
  // Blog Title (Bilingual)
  CLAUDE_BLOG_NAME:
    process.env.NEXT_PUBLIC_CLAUDE_BLOG_NAME || 'HOME',

  CLAUDE_BLOG_NAME_EN:
    process.env.NEXT_PUBLIC_CLAUDE_BLOG_NAME_EN ||
    process.env.NEXT_PUBLIC_CLAUDE_BLOG_NAME ||
    'Typography',

  CLAUDE_POST_AD_ENABLE:
    process.env.NEXT_PUBLIC_CLAUDE_POST_AD_ENABLE || false,
  // Whether to insert advertisements into the post list

  CLAUDE_POST_COVER_ENABLE:
    process.env.NEXT_PUBLIC_CLAUDE_POST_COVER_ENABLE || false,
  // Whether to display post cover images

  CLAUDE_ARTICLE_RECOMMEND_POSTS:
    process.env.NEXT_PUBLIC_CLAUDE_ARTICLE_RECOMMEND_POSTS || true,
  // Show recommended posts at the bottom of article pages

  // Navigation Menu Configuration
  CLAUDE_MENU_CATEGORY: true,
  // Show Categories

  CLAUDE_MENU_TAG: true,
  // Show Tags

  CLAUDE_MENU_ARCHIVE: true,
  // Show Archives

  // Table of Contents (TOC) Configuration
  CLAUDE_TOC_ENABLE:
    process.env.NEXT_PUBLIC_CLAUDE_TOC_ENABLE !== 'false',
  // Enable Table of Contents (enabled by default)

  CLAUDE_TOC_SHOW_LEVEL3:
    process.env.NEXT_PUBLIC_CLAUDE_TOC_SHOW_LEVEL3 !== 'false',
  // Display Level 3 headings in TOC (enabled by default)
  // Set to false to show only Level 1 and Level 2 headings

  CLAUDE_TOC_SCROLL_BEHAVIOR:
    process.env.NEXT_PUBLIC_CLAUDE_TOC_SCROLL_BEHAVIOR || 'instant',
  // Scrolling behavior: 'smooth' or 'instant'

  // Subtitle Configuration
  CLAUDE_SUBTITLE_DARK_ONLY:
    process.env.NEXT_PUBLIC_CLAUDE_SUBTITLE_DARK_ONLY === 'true',
  // Show subtitle in both light and dark modes by default
  // Set to true to display only in dark mode

  // GitHub Profile Image
  CLAUDE_PROFILE_AVATAR:
    process.env.NEXT_PUBLIC_CLAUDE_PROFILE_AVATAR ||
    'https://jmimwmtkeyugnrttxwnl.supabase.co/storage/v1/object/public/start-notion/START-NOTION%20LOGO.gif',
  // Avatar image URL
  // If empty, falls back to AVATAR or siteInfo.icon

  CLAUDE_FOOTER_COPYRIGHT:
    process.env.NEXT_PUBLIC_CLAUDE_FOOTER_COPYRIGHT || '',
  // Example: © 2023–2026 Yicheng
  // If empty, uses SINCE + AUTHOR

  // README Rendering Cache
  // Can be overridden by a field with the same name in the Notion configuration document
  CLAUDE_README_CACHE_ENABLED:
    process.env.NEXT_PUBLIC_CLAUDE_README_CACHE_ENABLED !== 'false',

  // Contribution Persistence
  // Can be overridden by a field with the same name in the Notion configuration document
  // Requires COCKROACH_DATABASE_URL (or DATABASE_URL)
  CLAUDE_CONTRIBUTION_PERSIST_ENABLED:
    process.env.NEXT_PUBLIC_CLAUDE_CONTRIBUTION_PERSIST_ENABLED !== 'false',

  CLAUDE_CONTRIBUTION_EVENT_LIMIT:
    Number(
      process.env.NEXT_PUBLIC_CLAUDE_CONTRIBUTION_EVENT_LIMIT || 50000
    )
  // Maximum number of contribution events to persist
}

export default CONFIG