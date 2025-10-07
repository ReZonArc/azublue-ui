import { Theme } from '@azublue-ui/lib';
import { color, InteractionState, Variant } from '@azublue-ui/tokens';

export const getDisabledFill = (theme: Theme) => {
  return color[theme].icon[Variant.Disabled][InteractionState.Default];
};
