import { LGGlyph } from '@azublue-ui/icon';
import { DarkModeProps } from '@azublue-ui/lib';

export type AssistantAvatarProps = LGGlyph.ComponentProps &
  DarkModeProps & {
    disabled?: boolean;
  };
