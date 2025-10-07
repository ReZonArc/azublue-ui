import { Theme } from '@azublue-ui/lib';
import { BaseFontSize } from '@azublue-ui/tokens';

import { type BannerProps, Variant } from '../shared.types';

export type BannerIconProps = Pick<BannerProps, 'image'> & {
  theme: Theme;
  baseFontSize: BaseFontSize;
  variant: Variant;
};
