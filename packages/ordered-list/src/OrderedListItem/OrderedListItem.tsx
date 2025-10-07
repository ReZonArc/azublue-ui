import React from 'react';

import { useDescendant } from '@azublue-ui/descendants';
import { cx } from '@azublue-ui/emotion';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';
import { Body, Description } from '@azublue-ui/typography';

import { OrderedListContext } from '../OrderedListContext/OrderedListContext';

import {
  baseStyles,
  contentStyles,
  getThemedStateStyles,
  markerStyles,
  stepIconClassName,
  titleStyles,
} from './OrderedListItem.styles';
import { OrderedListItemProps } from './OrderedListItem.types';

const OrderedListItem = React.forwardRef(
  (
    { children, className, title, description, ...rest }: OrderedListItemProps,
    forwardRef: React.ForwardedRef<HTMLLIElement>,
  ) => {
    const { index, ref } = useDescendant(OrderedListContext, forwardRef);
    const { theme } = useDarkMode();

    return (
      <li ref={ref} className={cx(baseStyles, className)} {...rest}>
        <div className={stepIconClassName}>
          <div className={cx(markerStyles, getThemedStateStyles(theme))}>
            {index + 1}
          </div>
        </div>

        <div className={contentStyles}>
          <Body baseFontSize={16} className={titleStyles}>
            {title}
          </Body>
          <Description>{description}</Description>
        </div>
      </li>
    );
  },
);

OrderedListItem.displayName = 'OrderedListItem';

export { OrderedListItem };
