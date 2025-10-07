import React from 'react';

import { cx } from '@azublue-ui/emotion';
import CheckmarkWithCircleIcon from '@azublue-ui/icon/dist/CheckmarkWithCircle';
import ImportantWithCircleIcon from '@azublue-ui/icon/dist/ImportantWithCircle';
import InfoWithCircleIcon from '@azublue-ui/icon/dist/InfoWithCircle';
import WarningIcon from '@azublue-ui/icon/dist/Warning';

import { Variant } from '../shared.types';

import {
  bannerIconPositionStyles,
  baseStyles,
  renderedImageStyles,
  themeStyles,
} from './BannerIcon.styles';
import { BannerIconProps } from './BannerIcon.types';

const Icons: Record<
  Variant,
  React.ComponentType<React.PropsWithChildren<any>>
> = {
  [Variant.Info]: InfoWithCircleIcon,
  [Variant.Warning]: ImportantWithCircleIcon,
  [Variant.Danger]: WarningIcon,
  [Variant.Success]: CheckmarkWithCircleIcon,
};

/**
 * @internal
 */
const BannerIcon = ({
  image,
  baseFontSize,
  variant,
  theme,
}: BannerIconProps) => {
  const Icon = Icons[variant];

  if (image) {
    return React.cloneElement(image, {
      className: renderedImageStyles,
    });
  } else {
    return (
      <Icon
        className={cx(
          baseStyles,
          themeStyles[theme][variant],
          bannerIconPositionStyles[baseFontSize],
        )}
      />
    );
  }
};

export default BannerIcon;
