import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';

import { Variant } from '../color';

import { scrollbarColor, ScrollbarVariant } from './scrollbarColor';

export const addScrollbarStyles = ({
  theme,
  variant = Variant.Primary,
}: {
  theme: Theme;
  variant: ScrollbarVariant;
}): string => {
  const thumbColor = scrollbarColor[theme].thumb[variant].default;
  const trackColor = scrollbarColor[theme].track[variant].default;

  return css`
    scrollbar-color: ${thumbColor} ${trackColor};
    &::-webkit-scrollbar-thumb {
      background-color: ${thumbColor};
    }
    &::-webkit-scrollbar-track {
      background-color: ${trackColor};
    }
  `;
};
