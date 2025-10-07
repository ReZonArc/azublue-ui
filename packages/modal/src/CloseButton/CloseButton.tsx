import React from 'react';

import { useIdAllocator } from '@azublue-ui/hooks';
import XIcon from '@azublue-ui/icon/dist/X';
import IconButton from '@azublue-ui/icon-button';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';

import { CloseIconColor } from '../shared.types';

import { getButtonStyles } from './CloseButton.styles';
import { CloseButtonProps } from './CloseButton.types';

export const CloseButton = ({
  className,
  closeIconColor = CloseIconColor.Default,
  ...rest
}: CloseButtonProps) => {
  const { theme } = useDarkMode();
  const closeId = useIdAllocator({ prefix: 'modal-close_button' });

  return (
    <IconButton
      aria-label="Close modal"
      className={getButtonStyles({
        className,
        customColor: closeIconColor,
        theme,
      })}
      id={closeId}
      {...rest}
    >
      <XIcon />
    </IconButton>
  );
};

CloseButton.displayName = 'CloseButton';
