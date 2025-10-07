import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { color } from '@azublue-ui/tokens';

import { menuColor } from '../styles';

export const getMenuGroupItemStyles = (theme: Theme) => css`
  cursor: unset;
  background-color: ${menuColor[theme].background.default};
`;

export const getMenuGroupTitleStyles = (theme: Theme) => css`
  color: ${color[theme].text.secondary.default};
`;

export const menuGroupULStyles = css`
  margin: 0;
  padding: 0;
`;
