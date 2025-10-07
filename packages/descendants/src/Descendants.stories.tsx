/* eslint-disable no-console */
import React, { ComponentProps, ElementType, useRef, useState } from 'react';
import { faker } from '@faker-js/faker';
import { StoryMetaType } from '@az-tools/storybook-utils';
import { StoryObj } from '@storybook/react';
import random from 'lodash/random';
import range from 'lodash/range';
import shuffle from 'lodash/shuffle';

import Button from '@azublue-ui/button';
import { css, cx } from '@azublue-ui/emotion';
import AzuBlueProvider from '@azublue-ui/leafygreen-provider';
import Popover from '@azublue-ui/popover';

import {
  TestDescendant,
  TestDescendant2,
  TestDescendantContext,
  TestParent,
  TestParent2,
} from './testUtils/components.testutils';
import { TestSelectionContext } from './testUtils/testSelectionContext';
import { useInitDescendants } from '.';

faker.seed(0);

const testItemStyle = css`
  &::before {
    content: attr(data-index);
    color: gray;
    padding-right: 4px;
    font-family: monospace;
  }
`;

const nestedItemStyle = css`
  padding-left: 8px;
`;

const meta: StoryMetaType<ElementType<unknown>> = {
  title: 'Internal/Hooks/Descendants',
  parameters: {
    default: null,
    chromatic: {
      disableSnapshot: true,
    },
  },
};
export default meta;

const baseItems = [
  'Adam',
  'Brooke',
  'Chris',
  'Dave',
  'Eliane',
  'Fred',
  'George',
  'Harry',
  'Irena',
  'Jeremy',
];

export const Basic = () => {
  const [items, setItems] = useState(baseItems);

  const addItem = () => {
    const newItems = [...items];
    newItems.splice(items.length / 2, 0, faker.person.firstName());
    setItems(newItems);
  };

  const removeItem = () => {
    const newItems = [...items];
    newItems.splice(items.length / 2, 1);
    setItems(newItems);
  };

  const shuffleItems = () => {
    setItems(shuffle(items));
  };

  const { Provider: TestDescendantsProvider } = useInitDescendants(
    TestDescendantContext,
  );
  const [selected, setSelected] = useState<number | undefined>(0);

  return (
    <AzuBlueProvider>
      <div>
        <Button variant="primary" onClick={addItem}>
          Add Item
        </Button>
        &nbsp;
        <Button variant="danger" onClick={removeItem}>
          Remove Item
        </Button>
        &nbsp;
        <Button onClick={shuffleItems}>Shuffle Items</Button>
        <br />
        <TestDescendantsProvider>
          <TestSelectionContext.Provider value={{ selected, setSelected }}>
            {items.map((x, i) => (
              <TestDescendant
                className={testItemStyle}
                key={x + i}
                group="person"
              >
                {x}
              </TestDescendant>
            ))}
          </TestSelectionContext.Provider>
        </TestDescendantsProvider>
      </div>
    </AzuBlueProvider>
  );
};

export const Nested = () => {
  const [people, _setItems] = useState(
    baseItems.map(item => ({
      name: item,
      animals: range(random(0, 10)).map(_ => faker.animal.type()),
    })),
  );

  const { Provider } = useInitDescendants(TestDescendantContext);
  const [selected, setSelected] = useState<number | undefined>(0);
  const [isExpanded, setExpanded] = useState(true);

  const toggleCollapse = () => {
    setExpanded(e => !e);
  };

  return (
    <AzuBlueProvider>
      <div>
        <Button onClick={toggleCollapse}>
          {isExpanded ? 'Collapse' : 'Expand'} All
        </Button>
        <Provider>
          <TestSelectionContext.Provider value={{ selected, setSelected }}>
            {people.map((person, i) => (
              <TestDescendant className={testItemStyle} key={person.name + i}>
                {person.name}
                {person.animals?.length && isExpanded
                  ? person.animals.map((animal, j) => (
                      <TestDescendant
                        key={person.name + i + animal + j}
                        className={cx(nestedItemStyle, testItemStyle)}
                      >
                        {animal}
                      </TestDescendant>
                    ))
                  : ''}
              </TestDescendant>
            ))}
          </TestSelectionContext.Provider>
        </Provider>
      </div>
    </AzuBlueProvider>
  );
};

export const MultipleContexts = () => {
  return (
    <TestParent>
      <TestDescendant className={testItemStyle}>Apple</TestDescendant>
      <TestDescendant className={testItemStyle}>Banana</TestDescendant>
      <TestDescendant className={testItemStyle}>
        Peppers
        <TestParent2>
          <TestDescendant2 className={cx(nestedItemStyle, testItemStyle)}>
            Anaheim
          </TestDescendant2>
          <TestDescendant2 className={cx(nestedItemStyle, testItemStyle)}>
            Habanero
          </TestDescendant2>
        </TestParent2>
      </TestDescendant>
    </TestParent>
  );
};

const Parent = ({
  children,
  open,
  ...rest
}: ComponentProps<'div'> & { open: boolean }) => {
  const elRef = useRef(null);
  const parentRef = useRef(null);
  const { getDescendants, Provider } = useInitDescendants(
    TestDescendantContext,
  );

  const handleTransition = () => {
    console.log(getDescendants().map(d => d.id));
  };

  return (
    <>
      <span ref={elRef} />
      <Provider>
        <Popover
          refEl={elRef}
          style={{ border: '1px solid red' }}
          active={open}
          onEntered={handleTransition}
        >
          <div {...rest} ref={parentRef} data-testid="parent">
            {children}
          </div>
        </Popover>
      </Provider>
    </>
  );
};

export const WithPopover: StoryObj<typeof Parent> = {
  render: ({ open }) => {
    return (
      <Parent open={open}>
        <TestDescendant tabIndex={0}>Apple</TestDescendant>
        <TestDescendant tabIndex={0}>Banana</TestDescendant>
      </Parent>
    );
  },
  args: {
    open: true,
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
  },
};
