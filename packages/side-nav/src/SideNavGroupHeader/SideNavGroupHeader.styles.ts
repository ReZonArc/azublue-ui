import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';
import { spacing } from '@azublue-ui/tokens';

export const iconBaseStyles = css`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[2]}px;
`;

export const iconCustomStyle = css`
  display: inline-flex;
`;

export const iconCustomThemeStyle: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.green.dark2};
  `,
  [Theme.Dark]: css`
    color: ${palette.green.light1};
  `,
};

export const overlineStyle = css`
  color: inherit;
`;
