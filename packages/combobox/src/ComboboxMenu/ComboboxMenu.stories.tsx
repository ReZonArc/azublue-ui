/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react';
import { StoryMetaType, StoryType } from '@az-tools/storybook-utils';

import { css } from '@azublue-ui/emotion';
import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { ComboboxContext } from '../ComboboxContext';
import { defaultContext } from '../ComboboxContext/ComboboxContext';

import { ComboboxMenu } from './ComboboxMenu';

const meta: StoryMetaType<typeof ComboboxMenu> = {
  title: 'Components/Inputs/Combobox/ComboboxMenu',
  component: ComboboxMenu,
  parameters: {
    default: null,
    generate: {
      combineArgs: {
        darkMode: [false, true],
      },
      decorator: (Instance, context) => {
        const [open, setOpen] = useState(false);
        useEffect(() => {
          setOpen(true);
        }, []);
        const divRef = React.useRef<HTMLDivElement>(null);
        return (
          <AzuBlueProvider darkMode={context?.args.darkMode}>
            <ComboboxContext.Provider
              value={{ ...defaultContext, isOpen: open }}
            >
              <div
                ref={divRef}
                className={css`
                  height: 0;
                  color: transparent;

                  td:has(&) {
                    vertical-align: top;
                  }
                `}
              >
                SearchInput Placeholder
              </div>
              <Instance refEl={divRef} />
            </ComboboxContext.Provider>
          </AzuBlueProvider>
        );
      },
    },
  },
};

export default meta;

export const Generated: StoryType<typeof ComboboxMenu> = () => <></>;
Generated.parameters = {
  chromatic: {
    disableSnapshot: true,
  },
};
