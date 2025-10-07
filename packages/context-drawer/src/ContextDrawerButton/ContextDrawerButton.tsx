import React, { forwardRef } from 'react';

import Button, { Size } from '@azublue-ui/button';
import ChevronDown from '@azublue-ui/icon/dist/ChevronDown';
import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';

import { ButtonCorner, Side } from '../ButtonCorner';

import { getButtonStyles } from './ContextDrawerButton.styles';
import { ContextDrawerButtonProps } from './ContextDrawerButton.types';

export const ContextDrawerButton = forwardRef<
  HTMLButtonElement,
  ContextDrawerButtonProps
>(({ children, className, isOpen = false, ...rest }, ref) => {
  const { darkMode, theme } = useDarkMode();

  const label = children ?? (isOpen ? 'Hide' : 'View more');

  return (
    <AzuBlueProvider darkMode={darkMode}>
      <Button
        ref={ref}
        rightGlyph={<ChevronDown />}
        size={Size.XSmall}
        className={getButtonStyles({ className, isOpen, theme })}
        {...rest}
      >
        <ButtonCorner side={Side.Left} />
        {label}
        <ButtonCorner side={Side.Right} />
      </Button>
    </AzuBlueProvider>
  );
});

ContextDrawerButton.displayName = 'ContextDrawerButton';
