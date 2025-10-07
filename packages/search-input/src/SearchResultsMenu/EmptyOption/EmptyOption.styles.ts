import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';
import { spacing } from '@azublue-ui/tokens';

export const emptyOptionStyles = css`
  display: flex;
  align-items: center;
  gap: ${spacing[2]}px;
  font-style: italic;
  font-weight: 300;
  padding-block: ${spacing[1]}px;
`;

export const emptyOptionThemeStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.gray.dark1};
  `,
  [Theme.Dark]: css`
    color: ${palette.gray.light1};
  `,
};
