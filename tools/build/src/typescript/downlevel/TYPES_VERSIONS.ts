interface DownlevelVersion {
  /** If the consuming application's TS version satisfies the condition... */
  condition: `${'<' | '<=' | '>' | '>=' | ''}${number}.${number}`;
  /** ...we should use this version of the package */
  target: `${number}.${number}`;
}

// TS Downlevel mapping
// Note, conditions should be listed in order (i.e. as if they were multiple cascading `if` statements)
export const DOWNLEVEL_VERSIONS = [
  { condition: '<=5.0', target: '4.9' },
] as const satisfies Readonly<Array<DownlevelVersion>>;

// Packages to exclude from typesVersions updates
// These packages are CLI-only, and don't need to be down-leveled
export const EXCLUDED_PACKAGES = [
  '@az-tools/build',
  '@az-tools/cli',
  '@az-tools/create',
  '@az-tools/install',
  '@az-tools/link',
  '@az-tools/prompt-kit',
  '@az-tools/slackbot',
  '@az-tools/test',
  '@az-tools/update',
  '@az-tools/validate',
];

export const DEFAULT_TYPES_EXPORT_PATH = './dist/types';
