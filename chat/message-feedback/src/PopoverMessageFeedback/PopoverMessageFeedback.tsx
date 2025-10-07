import React, { ForwardedRef, forwardRef } from 'react';
import {
  useLeafyGreenChatContext,
  Variant,
} from '@az-chat/leafygreen-chat-provider';

import { cx } from '@azublue-ui/emotion';
import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';
import Popover from '@azublue-ui/popover';
import { spacing } from '@azublue-ui/tokens';

import { InlineMessageFeedback } from '../InlineMessageFeedback';

import {
  baseStyles,
  contentContainerStyles,
  themeStyles,
} from './PopoverMessageFeedback.styles';
import { PopoverMessageFeedbackProps } from '.';

export const PopoverMessageFeedback = forwardRef(
  (
    {
      darkMode: darkModeProp,
      cancelButtonText,
      onCancel,
      cancelButtonProps,
      submitButtonText,
      submitButtonProps,
      onSubmit,
      textareaProps,
      onClose,
      label,
      ...rest
    }: PopoverMessageFeedbackProps,
    forwardedRef: ForwardedRef<HTMLDivElement>,
  ) => {
    const { theme } = useDarkMode(darkModeProp);
    const { variant } = useLeafyGreenChatContext();
    const isCompact = variant === Variant.Compact;

    if (isCompact) {
      return null;
    }

    return (
      <AzuBlueProvider darkMode={true}>
        {/* @ts-ignore usePortal should not be an issue since popoverProps are being passed directly */}
        <Popover
          ref={forwardedRef}
          spacing={spacing[3]}
          {...rest}
          className={cx(baseStyles, themeStyles[theme])}
        >
          <div className={contentContainerStyles}>
            <InlineMessageFeedback
              cancelButtonText={cancelButtonText}
              onCancel={onCancel}
              cancelButtonProps={cancelButtonProps}
              submitButtonText={submitButtonText}
              submitButtonProps={submitButtonProps}
              onSubmit={onSubmit}
              textareaProps={textareaProps}
              onClose={onClose}
              label={label}
            />
          </div>
        </Popover>
      </AzuBlueProvider>
    );
  },
);

PopoverMessageFeedback.displayName = 'PopoverMessageFeedback';
