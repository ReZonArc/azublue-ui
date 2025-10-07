import React from 'react';
import { StoryMetaType } from '@az-tools/storybook-utils';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import InternalRowBase from '../Row/InternalRowBase';
import Table from '../Table';
import TableBody from '../TableBody';

import InternalCell from './InternalCellBase';

const meta: StoryMetaType<typeof InternalCell> = {
  title: 'Composition/Data Display/Table/Cell',
  component: InternalCell,
  parameters: {
    default: null,
    generate: {
      combineArgs: {
        darkMode: [false, true],
        align: ['left', 'center', 'right'],
      },
      args: {
        children: 'Cell content',
      },
      decorator: (Instance, ctx) => {
        return (
          <AzuBlueProvider darkMode={ctx?.args.darkMode}>
            <Table>
              <TableBody>
                <InternalRowBase>
                  <Instance />
                </InternalRowBase>
              </TableBody>
            </Table>
          </AzuBlueProvider>
        );
      },
    },
  },
};

export default meta;

export const Generated = () => <></>;
