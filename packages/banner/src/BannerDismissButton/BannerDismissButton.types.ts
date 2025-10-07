import { Theme } from '@azublue-ui/lib';
import { BaseFontSize } from '@azublue-ui/tokens';

import { type BannerProps, Variant } from '../shared.types';

export type BannerDismissButtonProps = Pick<
  BannerProps,
  'onClose' | 'darkMode'
> & {
  theme: Theme;
  variant: Variant;
  baseFontSize: BaseFontSize;
};
