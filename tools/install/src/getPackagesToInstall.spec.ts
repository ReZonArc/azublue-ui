/* eslint-disable no-console */

import { ALL_PACKAGES } from './ALL_PACKAGES';
import { getPackagesToInstall } from './getPackagesToInstall';

// Mock console.log to reduce noise in tests
console.log = jest.fn();

describe('getPackagesToInstall', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return packages matching explicit package names', () => {
    const result = getPackagesToInstall(['button', 'modal'], {});

    expect(result).toEqual([
      '@azublue-ui/button@latest',
      '@azublue-ui/modal@latest',
    ]);
  });

  test('should return essential packages when essentials option is true', () => {
    const result = getPackagesToInstall([], { essentials: true });

    expect(result).toEqual([
      '@azublue-ui/leafygreen-provider@latest',
      '@azublue-ui/emotion@latest',
      '@azublue-ui/lib@latest',
    ]);
  });

  test('should return basic packages when basic option is true', () => {
    const result = getPackagesToInstall([], { basic: true });

    // Basic packages include essentials plus common components
    expect(result).toEqual([
      '@azublue-ui/leafygreen-provider@latest',
      '@azublue-ui/emotion@latest',
      '@azublue-ui/lib@latest',
      '@azublue-ui/banner@latest',
      '@azublue-ui/button@latest',
      '@azublue-ui/card@latest',
      '@azublue-ui/icon@latest',
      '@azublue-ui/icon-button@latest',
      '@azublue-ui/modal@latest',
      '@azublue-ui/tokens@latest',
      '@azublue-ui/typography@latest',
    ]);
  });

  test('should prioritize basic over essentials when both are true', () => {
    const result = getPackagesToInstall([], { basic: true, essentials: true });

    // Should return basic packages (which include essentials)
    expect(result).toEqual([
      '@azublue-ui/leafygreen-provider@latest',
      '@azublue-ui/emotion@latest',
      '@azublue-ui/lib@latest',
      '@azublue-ui/banner@latest',
      '@azublue-ui/button@latest',
      '@azublue-ui/card@latest',
      '@azublue-ui/icon@latest',
      '@azublue-ui/icon-button@latest',
      '@azublue-ui/modal@latest',
      '@azublue-ui/tokens@latest',
      '@azublue-ui/typography@latest',
    ]);
  });

  test('should return core packages when core option is true', () => {
    const result = getPackagesToInstall([], { ui: true });

    expect(result).toEqual(
      ALL_PACKAGES.filter(pkg => pkg.startsWith('@azublue-ui')).map(
        pkg => `${pkg}@latest`,
      ),
    );
  });

  test('should return charts packages when charts option is true', () => {
    const result = getPackagesToInstall([], { charts: true });

    expect(result).toEqual(
      ALL_PACKAGES.filter(pkg => pkg.startsWith('@az-charts')).map(
        pkg => `${pkg}@latest`,
      ),
    );
  });

  test('should return chat packages when chat option is true', () => {
    const result = getPackagesToInstall([], { chat: true });

    expect(result).toEqual(
      ALL_PACKAGES.filter(pkg => pkg.startsWith('@az-chat')).map(
        pkg => `${pkg}@latest`,
      ),
    );
  });

  test('should return combined packages when multiple scope options are true', () => {
    const result = getPackagesToInstall([], {
      ui: true,
      charts: true,
    });

    expect(result).toEqual(
      ALL_PACKAGES.filter(
        pkg => pkg.startsWith('@azublue-ui') || pkg.startsWith('@az-charts'),
      ).map(pkg => `${pkg}@latest`),
    );
  });

  test('should return combined packages when a scope and flag are provided', () => {
    const result = getPackagesToInstall([], {
      essentials: true,
      charts: true,
    });

    const combinedPkgs = [
      '@azublue-ui/leafygreen-provider@latest',
      '@azublue-ui/emotion@latest',
      '@azublue-ui/lib@latest',
      ...ALL_PACKAGES.filter(pkg => pkg.startsWith('@az-charts')).map(
        pkg => `${pkg}@latest`,
      ),
    ];
    expect(result).toEqual(combinedPkgs);
  });

  test('should return all packages when no options are specified', () => {
    const result = getPackagesToInstall([], {});

    expect(result).toEqual(ALL_PACKAGES.map(pkg => `${pkg}@latest`));
  });

  test('should log additional information when verbose option is true', () => {
    getPackagesToInstall([], { verbose: true });

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('packages in static file'),
    );
  });
});
