import { css, cx } from '@azublue-ui/emotion';

const hiddenTabPanelStyle = css`
  display: none;
`;

export const getTabPanelStyles = (isSelected: boolean) =>
  cx({
    [hiddenTabPanelStyle]: !isSelected,
  });
