import React from 'react';

import { cx } from '@azublue-ui/emotion';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';
import { BaseFontSize } from '@azublue-ui/tokens';
import { Body } from '@azublue-ui/typography';

import { getContainerStyles, titleStyles } from './ChartHeader.styles';
import { ChartHeaderProps } from './ChartHeader.types';

export function ChartHeader({
  title,
  titleIcon,
  showDivider,
  headerContent,
  className,
  ...rest
}: ChartHeaderProps) {
  const { theme } = useDarkMode();
  return (
    <div
      className={cx(getContainerStyles(theme, showDivider), className)}
      {...rest}
    >
      <div className={titleStyles}>
        <Body weight="regular" baseFontSize={BaseFontSize.Body1}>
          {title}
        </Body>
        {titleIcon && <div>{titleIcon}</div>}
      </div>
      <div>{headerContent}</div>
    </div>
  );
}
