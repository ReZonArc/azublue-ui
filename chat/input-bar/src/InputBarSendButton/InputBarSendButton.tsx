import React, { forwardRef } from 'react';

import Button from '@azublue-ui/button';
import ArrowUpIcon from '@azublue-ui/icon/dist/ArrowUp';
import StopIcon from '@azublue-ui/icon/dist/Stop';
import IconButton from '@azublue-ui/icon-button';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';

import { State } from '../shared.types';

import { getIconButtonStyles, getIconFill } from './InputBarSendButton.styles';
import { InputBarSendButtonProps } from './InputBarSendButton.types';
import { ReturnIcon } from './ReturnIcon';

export const InputBarSendButton = forwardRef<
  HTMLButtonElement,
  InputBarSendButtonProps
>(({ disabled, isCompact, shouldRenderButtonText, state, ...rest }, fwdRef) => {
  const { theme } = useDarkMode();

  const isLoading = state === State.Loading;

  if (!isCompact) {
    return (
      <Button
        size="small"
        rightGlyph={<ReturnIcon fill={getIconFill({ disabled, theme })} />}
        type="submit"
        disabled={disabled}
      >
        {shouldRenderButtonText && 'Enter'}
      </Button>
    );
  }

  return (
    <IconButton
      aria-label="Send message"
      className={getIconButtonStyles({ disabled, theme })}
      disabled={disabled}
      ref={fwdRef}
      type="submit"
      {...rest}
    >
      {isLoading ? <StopIcon /> : <ArrowUpIcon />}
    </IconButton>
  );
});

InputBarSendButton.displayName = 'InputBarSendButton';
