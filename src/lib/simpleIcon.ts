const SIMPLE_ICON_CDN = 'https://cdn.simpleicons.org';

const ICON_SRC_OVERRIDES: Record<string, string> = {
  reactnative: 'https://reactnative.dev/img/header_logo.svg',
};

export function simpleIconSrc(slug: string): string {
  const override = ICON_SRC_OVERRIDES[slug];
  if (override) return override;
  return `${SIMPLE_ICON_CDN}/${slug}`;
}
