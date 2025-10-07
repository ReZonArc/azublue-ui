import React from 'react';

import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';
import { FontWeight } from '@azublue-ui/tokens';
import { Body, Disclaimer } from '@azublue-ui/typography';

import {
  disclaimerStyles,
  getContainerStyles,
  getTitleStyles,
} from './DisclaimerText.styles';
import { DisclaimerTextProps } from './DisclaimerText.types';

export const DisclaimerText = ({
  children,
  className,
  darkMode: darkModeProp,
  title,
  ...rest
}: DisclaimerTextProps) => {
  const { darkMode, theme } = useDarkMode(darkModeProp);

  return (
    <AzuBlueProvider darkMode={darkMode}>
      <div className={getContainerStyles(className)} {...rest}>
        {title && (
          <Body weight={FontWeight.SemiBold} className={getTitleStyles(theme)}>
            {title}
          </Body>
        )}
        <Disclaimer className={disclaimerStyles}>{children}</Disclaimer>
      </div>
    </AzuBlueProvider>
  );
};

DisclaimerText.displayName = 'DisclaimerText';
