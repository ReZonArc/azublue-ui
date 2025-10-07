import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';

import { Variant } from './SplitButton.types';

export const buttonContainerStyles = css`
  position: relative;
  display: flex;
  z-index: 0; // Establish new stacking context
`;

export const buttonBaseStyles = css`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 1;
`;

export const buttonBorderColor: Record<Theme, Record<Variant, string>> = {
  [Theme.Light]: {
    [Variant.Default]: palette.gray.base,
    [Variant.Primary]: palette.green.light2,
    [Variant.Danger]: palette.red.light2,
  },
  [Theme.Dark]: {
    [Variant.Default]: palette.gray.light1,
    [Variant.Primary]: palette.green.base,
    [Variant.Danger]: palette.red.light2,
  },
};

export const buttonThemeStyles = (theme: Theme, variant: Variant) => css`
  &,
  &:hover,
  &:focus,
  &:focus-visible,
  &:active {
    border-right-color: ${buttonBorderColor[theme][variant]};
  }
`;
