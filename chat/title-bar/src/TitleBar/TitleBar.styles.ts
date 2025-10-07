import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';
import { spacing } from '@azublue-ui/tokens';

export const baseStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px ${spacing[4]}px;
  border-bottom: 1px solid;
`;

export const themeStyles: Record<Theme, string> = {
  [Theme.Dark]: css`
    background-color: ${palette.black};
    border-color: ${palette.gray.dark2};
  `,
  [Theme.Light]: css`
    background-color: ${palette.white};
    border-color: ${palette.gray.light2};
  `,
};

export const contentContainerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[2]}px;
`;

export const contentAlignmentStyles = css`
  margin: auto;
`;
