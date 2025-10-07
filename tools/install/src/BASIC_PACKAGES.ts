import { ESSENTIAL_PACKAGES } from './ESSENTIAL_PACKAGES';
import type { PACKAGE_NAME } from './types';

// Basic packages that include essentials plus commonly used components
// Basic packages that include essentials plus commonly used components
export const BASIC_PACKAGES = [
  ...ESSENTIAL_PACKAGES,
  '@azublue-ui/banner',
  '@azublue-ui/button',
  '@azublue-ui/card',
  '@azublue-ui/icon',
  '@azublue-ui/icon-button',
  '@azublue-ui/modal',
  '@azublue-ui/tokens',
  '@azublue-ui/typography',
] as const satisfies Readonly<Array<PACKAGE_NAME>>;
