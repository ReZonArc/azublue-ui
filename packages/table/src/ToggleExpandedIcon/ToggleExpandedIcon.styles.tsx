import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';
import { transitionDuration } from '@azublue-ui/tokens';

export const iconButtonTransitionStyles = css`
  transition: transform ${transitionDuration.default}ms ease-in-out;
`;

export const iconFills = (theme: Theme, disabled: boolean) => {
  const fills = {
    [Theme.Dark]: disabled ? palette.gray.dark1 : palette.gray.light2,
    [Theme.Light]: disabled ? palette.gray.light1 : palette.gray.dark1,
  };

  return fills[theme];
};

export const rotatedStyles = css`
  transform: rotate(90deg);
`;
