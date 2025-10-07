import React from 'react';

import { cx } from '@azublue-ui/emotion';
import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';
import { BaseFontSize } from '@azublue-ui/tokens';
import {
  Body,
  Overline,
  useUpdatedBaseFontSize,
} from '@azublue-ui/typography';

import {
  getBaseStyles,
  getContentStyles,
  getHeaderStyles,
  headerLabels,
} from './Callout.styles';
import { CalloutProps, Variant } from './Callout.types';

/**
 * Callouts should be used when you want to call out information to the user. Unlike banners, callouts cannot be dismissed. They’re optimized for long form copy (banners are optimized to save space).
 */
function Callout({
  variant = Variant.Note,
  title,
  baseFontSize: baseFontSizeProp,
  className,
  children: contents,
  darkMode: darkModeProp,
  ...rest
}: CalloutProps) {
  const { theme, darkMode } = useDarkMode(darkModeProp);
  const baseFontSize = useUpdatedBaseFontSize(baseFontSizeProp);

  return (
    <AzuBlueProvider
      darkMode={darkMode}
      baseFontSize={
        baseFontSize === BaseFontSize.Body1 ? 14 : BaseFontSize.Body2
      }
    >
      <div
        role="note"
        className={cx(getBaseStyles(theme, variant), className)}
        {...rest}
      >
        <Overline as="h2" className={getHeaderStyles(theme, variant)}>
          {headerLabels[variant]}
        </Overline>
        {title && (
          <Body as="h3">
            <strong>{title}</strong>
          </Body>
        )}
        <Body className={getContentStyles(theme)} as="div">
          {contents}
        </Body>
      </div>
    </AzuBlueProvider>
  );
}

export default Callout;
