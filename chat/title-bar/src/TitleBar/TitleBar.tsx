import React, { ForwardedRef, forwardRef } from 'react';
import { Avatar, Variant as ChatAvatarVariant } from '@az-chat/avatar';

import Badge from '@azublue-ui/badge';
import { cx } from '@azublue-ui/emotion';
import XIcon from '@azublue-ui/icon/dist/X';
import IconButton from '@azublue-ui/icon-button';
import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';
import { Body } from '@azublue-ui/typography';

import {
  baseStyles,
  contentAlignmentStyles,
  contentContainerStyles,
  themeStyles,
} from './TitleBar.styles';
import { Align, TitleBarProps } from '.';

export const TitleBar = forwardRef(
  (
    {
      title,
      className,
      align = Align.Center,
      onClose,
      badgeText,
      darkMode: darkModeProp,
      iconSlot,
      ...rest
    }: TitleBarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { darkMode, theme } = useDarkMode(darkModeProp);
    return (
      <AzuBlueProvider darkMode={darkMode}>
        <div
          className={cx(baseStyles, themeStyles[theme], className)}
          {...rest}
          ref={ref}
        >
          <div
            className={cx(contentContainerStyles, {
              [contentAlignmentStyles]: align === Align.Center,
            })}
          >
            <Avatar variant={ChatAvatarVariant.Mongo} sizeOverride={24} />
            <Body>
              <strong>{title}</strong>
            </Body>
            {badgeText && <Badge variant="blue">{badgeText}</Badge>}
          </div>
          {!!onClose && (
            <IconButton aria-label="Close chat" onClick={onClose}>
              {iconSlot ? iconSlot : <XIcon />}
            </IconButton>
          )}
        </div>
      </AzuBlueProvider>
    );
  },
);

TitleBar.displayName = 'TitleBar';
