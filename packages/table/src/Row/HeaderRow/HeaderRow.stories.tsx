/* eslint-disable react/jsx-key */

import React from 'react';
import { StoryMetaType } from '@az-tools/storybook-utils';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { HeaderCell } from '../../Cell';
import { HeaderRow } from '../../Row';
import Table from '../../Table/Table';
import TableHead from '../../TableHead';
import { makeData } from '../../utils/makeData.testutils';

const meta: StoryMetaType<typeof HeaderRow> = {
  title: 'Composition/Data Display/Table/Row/HeaderRow',
  component: HeaderRow,
  parameters: {
    default: null,
    generate: {
      combineArgs: {
        darkMode: [false, true],
      },
      args: {
        children: makeData(false, 1).map(rowData =>
          Object.keys(rowData).map(c => <HeaderCell>{c}</HeaderCell>),
        ),
      },
      decorator: (Instance, ctx) => {
        return (
          <AzuBlueProvider darkMode={ctx?.args.darkMode}>
            <Table>
              <TableHead>
                <Instance />
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
