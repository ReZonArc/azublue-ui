import React from 'react';

import { cx } from '@azublue-ui/emotion';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';

import { baseTypographyStyles } from '../styles';

import { disclaimerStyles, disclaimerTextColor } from './Disclaimer.styles';
import { DisclaimerProps } from './Disclaimer.types';

export function Disclaimer({
  darkMode: darkModeProp,
  children,
  className,
  ...rest
}: DisclaimerProps) {
  const { theme } = useDarkMode(darkModeProp);

  return (
    <small
      {...rest}
      className={cx(
        baseTypographyStyles,
        disclaimerStyles,
        disclaimerTextColor[theme],
        className,
      )}
    >
      {children}
    </small>
  );
}

Disclaimer.displayName = 'Disclaimer';

export default Disclaimer;
