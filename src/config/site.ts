export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    /** Official developer community (Lip Builds Roblox group — verified reachable). */
    developerGroup?: string;
    /** Gameplay / guide video hub. */
    gameplayVideos?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Trades Pets Universe Wiki",
  shortName: "Trades Pets Universe",
  logoText: "TP",
  tagline: "Pet Values, Trading Guides, Codes & Tier Lists",
  description: "Your ultimate Trades Pets Universe wiki! Explore pet values, trading guides, rare pet lists, active codes, egg odds, and beginner progression tips for the Roblox pet collection game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://trades-pets-universe.wiki",
  supportEmail: "support@trades-pets-universe.wiki",
  gameUrl: "https://www.roblox.com/games/74629631798007/Pets-Universe",
  heroVideoId: "NaBPUoqp8ro", // Trades Pets Universe trading update gameplay showcase
  // 00基础信息.md marks every official social account as 待补充 (unconfirmed), so no
  // "Official Discord"/"Official YouTube" link is claimed. Only verified real destinations
  // are exposed: the developer's Roblox group and a gameplay-video search hub.
  social: {
    developerGroup: "https://www.roblox.com/communities/35939768/Lip-Builds",
    gameplayVideos: "https://www.youtube.com/results?search_query=Trades+Pets+Universe+Roblox+gameplay",
  },
  // Single source of truth for locales is src/i18n/routing.ts; kept in sync here.
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
