import React, { forwardRef } from 'react';
import { useSeriesContext } from '@az-charts/series-provider';

import Checkbox from '@azublue-ui/checkbox';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';

import { getLegendCheckboxStyles } from './LegendCheckbox.styles';
import { LegendCheckboxProps } from './LegendCheckbox.types';

export const LegendCheckbox = forwardRef<HTMLInputElement, LegendCheckboxProps>(
  ({ className, name, ...rest }, fwdRef) => {
    const { theme } = useDarkMode();
    const { getColor } = useSeriesContext();

    const checkboxColor = name ? getColor(name, theme) : undefined;
    const showFilled = !!(rest.checked || rest.indeterminate);

    return (
      <Checkbox
        {...rest}
        animate={false}
        className={getLegendCheckboxStyles({
          className,
          checkboxColor,
          showFilled,
          theme,
        })}
        ref={fwdRef}
      />
    );
  },
);

LegendCheckbox.displayName = 'LegendCheckbox';
