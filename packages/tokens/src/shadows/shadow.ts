import { transparentize } from 'polished';

import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';

const lightModeShadowColor = transparentize(0.75, palette.black);

interface Value {
  readonly 100: string;
}

export const shadow: Record<Theme, Value> = {
  [Theme.Light]: {
    100: `0px 2px 4px 1px ${lightModeShadowColor}`,
  },
  [Theme.Dark]: {
    100: `unset`, // no shadow in dark mode
  },
} as const;
