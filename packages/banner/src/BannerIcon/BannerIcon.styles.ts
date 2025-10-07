import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';
import { BaseFontSize } from '@azublue-ui/tokens';

import { Variant } from '../shared.types';

export const baseStyles = css`
  position: relative;
  flex-shrink: 0;
`;

export const renderedImageStyles = css`
  // this margin is set to control text alignment with the base of the renderedImage
  margin-top: 3px;
  margin-bottom: 3px;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const bannerIconPositionStyles: Record<BaseFontSize, string> = {
  [BaseFontSize.Body1]: css`
    top: 2px; // 18px(height in figma) - 16px(actual height of icon)
  `,
  [BaseFontSize.Body2]: css`
    top: 5.5px; // 21.5px(height in figma) - 16px(actual height of icon)
  `,
};

export const themeStyles: Record<Theme, Record<Variant, string>> = {
  [Theme.Dark]: {
    [Variant.Info]: css`
      color: ${palette.blue.light1};
    `,
    [Variant.Warning]: css`
      color: ${palette.yellow.base};
    `,
    [Variant.Danger]: css`
      color: ${palette.red.light1};
    `,
    [Variant.Success]: css`
      color: ${palette.green.base};
    `,
  },
  [Theme.Light]: {
    [Variant.Info]: css`
      color: ${palette.blue.base};
    `,
    [Variant.Warning]: css`
      color: ${palette.yellow.dark2};
    `,
    [Variant.Danger]: css`
      color: ${palette.red.base};
    `,
    [Variant.Success]: css`
      color: ${palette.green.dark1};
    `,
  },
};
