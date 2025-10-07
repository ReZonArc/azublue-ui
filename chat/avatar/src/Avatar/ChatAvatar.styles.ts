import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';

export const textAvatarStyleOverrides = css`
  background-color: ${palette.gray.dark1};
  border: unset;
`;

export const iconAvatarStyleOverrides = (theme: Theme) => css`
  background-color: ${theme === Theme.Dark
    ? palette.gray.dark2
    : palette.gray.base};

  color: ${theme === Theme.Dark ? palette.gray.light1 : palette.white};

  border: unset;
`;

export const logoAvatarStyleOverrides = (theme: Theme) => css`
  background-color: ${theme === Theme.Dark
    ? palette.green.dark3
    : palette.black};
`;
