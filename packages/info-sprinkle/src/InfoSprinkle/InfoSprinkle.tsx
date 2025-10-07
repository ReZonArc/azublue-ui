import React, { useState } from 'react';

import { cx } from '@azublue-ui/emotion';
import InfoWithCircleIcon from '@azublue-ui/icon/dist/InfoWithCircle';
import { useDarkMode } from '@azublue-ui/leafygreen-provider';
import Tooltip, { RenderMode } from '@azublue-ui/tooltip';

import { iconBaseStyles, iconThemeStyles } from './InfoSprinkle.styles';
import { InfoSprinkleProps } from './InfoSprinkle.types';

/**
 * Info Sprinkles are used to provide additional information or context to users through the use of an Info Icon and a Tooltip. Info Sprinkles will surface a Tooltip to appear, similarly to our Inline Definition and GuideCue components.
 */
export const InfoSprinkle = React.forwardRef<
  HTMLButtonElement,
  InfoSprinkleProps
>(
  (
    {
      darkMode: darkModeProp,
      children,
      baseFontSize,
      triggerProps = {},
      ...rest
    }: InfoSprinkleProps,
    forwardRef,
  ) => {
    const { darkMode, theme } = useDarkMode(darkModeProp);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      setTooltipOpen(true);
      triggerProps?.onMouseEnter?.(e);
    };

    return (
      <Tooltip
        baseFontSize={baseFontSize}
        darkMode={darkMode}
        open={tooltipOpen}
        renderMode={RenderMode.TopLayer}
        setOpen={setTooltipOpen}
        trigger={
          <button
            data-testid="info-sprinkle-icon"
            aria-label="more info"
            type="button"
            {...triggerProps}
            aria-disabled
            ref={forwardRef}
            className={cx(
              iconBaseStyles,
              iconThemeStyles(theme),
              triggerProps?.className,
            )}
            onMouseEnter={handleMouseEnter}
          >
            <InfoWithCircleIcon size={baseFontSize} aria-hidden />
          </button>
        }
        {...rest}
      >
        {children}
      </Tooltip>
    );
  },
);

InfoSprinkle.displayName = 'InfoSprinkle';
