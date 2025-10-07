import type { PACKAGE_NAME } from './types';

// Essential packages that provide core functionality
export const ESSENTIAL_PACKAGES = [
  '@azublue-ui/leafygreen-provider',
  '@azublue-ui/emotion',
  '@azublue-ui/lib',
] as const satisfies Readonly<Array<PACKAGE_NAME>>;
