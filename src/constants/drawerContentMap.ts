export const DRAWER_KEYS = {
  FILTER_ARTICLE: "FILTER_ARTICLE",
} as const;

export type DrawerKey = keyof typeof DRAWER_KEYS;
