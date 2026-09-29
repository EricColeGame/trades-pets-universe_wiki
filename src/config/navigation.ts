import { BookOpen, Code2, PawPrint, TrendingUp, Users, Wrench, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "pets", path: "/pets", icon: PawPrint, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "updates", path: "/updates", icon: Zap, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
