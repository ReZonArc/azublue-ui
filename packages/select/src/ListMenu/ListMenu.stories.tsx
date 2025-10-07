/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react';
import { StoryMetaType, StoryType } from '@az-tools/storybook-utils';

import { css } from '@azublue-ui/emotion';
import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { InternalOption } from '../Option';
import { SelectContext } from '../SelectContext';

import ListMenu from './ListMenu';

const meta: StoryMetaType<typeof ListMenu> = {
  title: 'Components/Inputs/Select/ListMenu',
  component: ListMenu,
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
            <SelectContext.Provider
              value={{ open: open, size: 'default', disabled: false }}
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
              <Instance referenceElement={divRef}>
                {/* @ts-expect-error missing props*/}
                <InternalOption>Cat</InternalOption>
              </Instance>
            </SelectContext.Provider>
          </AzuBlueProvider>
        );
      },
    },
  },
};

export default meta;

export const Generated: StoryType<typeof ListMenu> = () => <></>;
Generated.parameters = {
  chromatic: {
    disableSnapshot: true,
  },
};
