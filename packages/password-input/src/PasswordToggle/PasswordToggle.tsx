import React from 'react';

import { VisuallyHidden } from '@azublue-ui/a11y';
import { cx } from '@azublue-ui/emotion';
import Icon from '@azublue-ui/icon';
import IconButton from '@azublue-ui/icon-button';

import { baseStyles, sizeStyles } from './PasswordToggle.styles';
import { PasswordToggleProps } from './PasswordToggle.types';

export const PasswordToggle = ({
  showPassword,
  handlePasswordToggleClick,
  size,
}: PasswordToggleProps) => {
  const showPasswordIcon = showPassword ? 'Visibility' : 'VisibilityOff';

  return (
    <>
      <IconButton
        aria-label="Toggle password visibility"
        onClick={handlePasswordToggleClick}
        className={cx(baseStyles, sizeStyles[size])}
        role="switch"
        aria-checked={showPassword ? true : false}
        type="button"
      >
        <Icon aria-hidden={true} glyph={showPasswordIcon} />
      </IconButton>
      <VisuallyHidden aria-live="polite" id="password-text">
        {showPassword ? 'Password shown' : 'Password hidden'}
      </VisuallyHidden>
    </>
  );
};

PasswordToggle.displayName = 'PasswordToggle';
