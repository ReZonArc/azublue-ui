import React from 'react';

import { cx } from '@azublue-ui/emotion';
import XIcon from '@azublue-ui/icon/dist/X';
import IconButton from '@azublue-ui/icon-button';

import { baseStyles, variantStyles } from './BannerDismissButton.styles';
import { BannerDismissButtonProps } from './BannerDismissButton.types';

/**
 * @internal
 */
const BannerDismissButton = ({
  onClose,
  darkMode,
  theme,
  variant,
}: BannerDismissButtonProps) => (
  <IconButton
    className={cx(baseStyles, variantStyles[theme][variant])}
    aria-label="Close Message"
    onClick={onClose}
    darkMode={darkMode}
  >
    <XIcon />
  </IconButton>
);

export default BannerDismissButton;
