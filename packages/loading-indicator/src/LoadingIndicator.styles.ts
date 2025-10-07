import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';

export const descriptionThemeColor = {
  [Theme.Dark]: css`
    color: ${palette.gray.light1};
  `,
  [Theme.Light]: css`
    color: ${palette.gray.dark1};
  `,
};
