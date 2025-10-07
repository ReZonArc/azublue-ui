import React from 'react';
import { StoryMetaType } from '@az-tools/storybook-utils';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import InternalRowBase from '../../Row/InternalRowBase';
import Table from '../../Table';
import TableHead from '../../TableHead';

import HeaderCell from './HeaderCell';

const meta: StoryMetaType<typeof HeaderCell> = {
  title: 'Composition/Data Display/Table/Cell/HeaderCell',
  component: HeaderCell,
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
              <TableHead>
                <InternalRowBase>
                  <Instance />
                </InternalRowBase>
              </TableHead>
            </Table>
          </AzuBlueProvider>
        );
      },
    },
  },
};

export default meta;

export const Generated = () => <></>;
