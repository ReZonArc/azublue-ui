import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';
import { spacing } from '@azublue-ui/tokens';

export const baseStyles = css`
  width: 372px;
  border-radius: 16px;
  border: 1px solid;
`;

export const contentContainerStyles = css`
  padding: ${spacing[3]}px;
`;

export const themeStyles = {
  [Theme.Dark]: css`
    background-color: ${palette.gray.dark3};
    border-color: ${palette.gray.dark2};
  `,
  [Theme.Light]: css`
    background-color: ${palette.black};
    border-color: ${palette.black};
  `,
};
