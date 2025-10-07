import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { spacing } from '@azublue-ui/tokens';

import { menuColor } from '../styles';

export const getFocusableMenuItemWrapperStyles = (theme: Theme) => css`
  padding: ${spacing[100]}px;
  cursor: unset;
  background-color: ${menuColor[theme].background.default};
`;
