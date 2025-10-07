import { css } from '@azublue-ui/emotion';
import { Theme } from '@azublue-ui/lib';
import { color, fontWeights, spacing } from '@azublue-ui/tokens';

export const navStyles = css``;

export const getOrderedListStyles = ({
  theme = Theme.Light,
}: {
  theme: Theme;
}) => css`
  padding: 0;
  margin: 0;
  border-left: 1px solid ${color[theme].border.secondary.default};
`;

export const getTitleStyles = ({
  theme = Theme.Light,
}: {
  theme: Theme;
}) => css`
  color: ${color[theme].text.secondary.default};
  font-weight: ${fontWeights.semiBold};
  margin-block-end: ${spacing[200]}px;
`;
