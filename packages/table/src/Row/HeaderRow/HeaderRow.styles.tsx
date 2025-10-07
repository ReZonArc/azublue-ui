import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';

export const getBaseStyles = (theme: Theme) => css`
  background-color: inherit;
  position: relative;

  &:last-of-type {
    box-shadow: 0 4px
      ${theme === Theme.Dark ? palette.gray.dark2 : palette.gray.light2};
  }
`;
