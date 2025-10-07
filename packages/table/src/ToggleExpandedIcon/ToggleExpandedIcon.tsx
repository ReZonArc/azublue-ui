import React from 'react';

import { cx } from '@azublue-ui/emotion';
import Icon from '@azublue-ui/icon';
import IconButton from '@azublue-ui/icon-button';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';

import { useTableContext } from '../TableContext';

import {
  iconButtonTransitionStyles,
  iconFills,
  rotatedStyles,
} from './ToggleExpandedIcon.styles';
import { type ToggleExpandedIconProps } from './ToggleExpandedIcon.types';

/**
 * @internal
 */
const ToggleExpandedIcon = ({
  isExpanded,
  toggleExpanded,
  disabled,
  ...rest
}: ToggleExpandedIconProps) => {
  const { theme } = useDarkMode();
  const { lgIds } = useTableContext();

  return (
    <IconButton
      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} row`}
      disabled={disabled}
      onClick={toggleExpanded}
      className={cx(
        {
          [rotatedStyles]: isExpanded,
        },
        iconButtonTransitionStyles,
      )}
      data-lgid={lgIds.expandButton}
      data-testid={lgIds.expandButton}
      {...rest}
    >
      <Icon
        glyph="ChevronRight"
        role="presentation"
        fill={iconFills(theme, !!disabled)}
      />
    </IconButton>
  );
};

export default ToggleExpandedIcon;
