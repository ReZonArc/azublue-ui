import React, { ForwardedRef, forwardRef } from 'react';

import { AssistantAvatar } from '@azublue-ui/avatar';
import { cx } from '@azublue-ui/emotion';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';
import { BaseFontSize } from '@azublue-ui/tokens';
import { Body } from '@azublue-ui/typography';

import {
  baseStyles,
  buttonTextStyles,
  contentContainerStyles,
  themeStyles,
} from './ChatTrigger.styles';
import { ChatTriggerProps } from './ChatTrigger.types';

export const ChatTrigger = forwardRef(
  (
    { className, children, darkMode: darkModeProp, ...rest }: ChatTriggerProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { darkMode, theme } = useDarkMode(darkModeProp);
    return (
      <button
        className={cx(baseStyles, themeStyles[theme], className)}
        {...rest}
        ref={ref}
      >
        <div className={contentContainerStyles}>
          <AssistantAvatar darkMode={darkMode} disabled={rest.disabled} />
          {children && (
            <Body
              baseFontSize={BaseFontSize.Body1}
              className={buttonTextStyles}
            >
              <b>{children}</b>
            </Body>
          )}
        </div>
      </button>
    );
  },
);

ChatTrigger.displayName = 'ChatTrigger';
