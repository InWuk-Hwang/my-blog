import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://thepastpatch.com/",
    title: "The Past Patch",
    description: "Curious about history's weirdest moments? The Past Patch brings bizarre true events back to life through original 2D illustrations and storytelling.",
    author: "InWuk Hwang",
    profile: "https://thepastpatch.com",
    ogImage: "default-og.jpg",
    lang: "en-US",
    timezone: "Asia/Seoul",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/InWuk-Hwang/my-blog" },
    { name: "mail",     url: "mailto:Muzigae29@gmail.com" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});