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
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://trades-pets-universe.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/74629631798007/Pets-Universe",
  heroVideoId: "NaBPUoqp8ro", // Trades Pets Universe trading update gameplay showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
