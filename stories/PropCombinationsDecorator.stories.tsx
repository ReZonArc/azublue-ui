import React, { useRef } from 'react';
import { StoryMetaType, StoryType } from '@az-tools/storybook-utils';

import { Variant } from '@azublue-ui/badge';
import { badgeVariants as variantStyle } from '@azublue-ui/badge/src/Badge/styles';
import { css, cx } from '@azublue-ui/emotion';
import Icon, { glyphs } from '@azublue-ui/icon';
import AzuBlueProvider, {
  useBaseFontSize,
} from '@azublue-ui/azublue-provider';
import { DarkModeProps, getTheme, HTMLElementProps } from '@azublue-ui/lib';
import { palette } from '@azublue-ui/palette';
import { BaseFontSize } from '@azublue-ui/tokens';

interface DemoProps extends HTMLElementProps<'button'>, DarkModeProps {
  checked: boolean;
  variant: Variant;
  glyph?: keyof typeof glyphs;
}

const DemoComponent = ({
  children,
  checked,
  darkMode,
  glyph,
  variant,
}: DemoProps) => {
  const theme = getTheme(darkMode ?? false);

  const baseFontSize = useBaseFontSize();

  return (
    <div
      className={cx(
        css`
          display: flex;
          align-items: center;
          gap: 0.5em;
          padding: 0.25em 1em;
          color: ${darkMode ? palette.white : palette.black};
          background-color: ${darkMode
            ? palette.gray.dark4
            : palette.gray.light3};
          font-size: ${baseFontSize}px;
        `,
        variantStyle[theme][variant],
      )}
    >
      {checked && <Icon size="xlarge" glyph="Checkmark" />}
      {glyph && !checked && <Icon glyph={glyph} />}
      {children}
    </div>
  );
};

const meta: StoryMetaType<
  typeof DemoComponent,
  { baseFontSize: BaseFontSize }
> = {
  title: 'Demo/PropCombinationsDecorator',
  component: DemoComponent,
  parameters: {
    default: null,
    generate: {
      combineArgs: {
        darkMode: [false, true],
        baseFontSize: [13, 16],
        glyph: [undefined, 'Cloud'],
        checked: [false, true],
        variant: Object.values(Variant),
      },
      excludeCombinations: [
        {
          checked: true,
          glyph: 'Cloud',
        },
      ],
      decorator: (InstanceFn, context) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const ref = useRef(null);
        return (
          <AzuBlueProvider baseFontSize={context?.args.baseFontSize}>
            <InstanceFn ref={ref} />
          </AzuBlueProvider>
        );
      },
    },
    chromatic: {
      disableSnapshot: false,
    },
  },
  args: {
    children: 'Demo Content',
  },
};
export default meta;

export const Generated: StoryType<typeof DemoComponent> = () => <></>;
Generated.parameters = {
  chromatic: { disableSnapshot: true },
};
