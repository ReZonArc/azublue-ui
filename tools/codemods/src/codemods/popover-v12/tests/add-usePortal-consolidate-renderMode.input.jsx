import React from 'react';

import { Combobox as LGCombobox } from '@azublue-ui/combobox';
import { Menu } from '@azublue-ui/menu';
import Popover from '@azublue-ui/popover';
import { Select } from '@azublue-ui/select';
import { SplitButton } from '@azublue-ui/split-button';
import LeafyGreenTooltip from '@azublue-ui/tooltip';

const Combobox = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const Child = (props) => {
  return <div>{props.children}</div>;
};

export const App = () => {
  const spreadProps = {
    prop: true,
  };

  const WrappedPopover = () => {
    return <Popover usePortal={false} {...spreadProps} />;
  };

  const DefaultWrappedPopover = () => {
    return <Popover {...spreadProps} />;
  };

  return (
    <>
      <Combobox />
      <LGCombobox />
      <Menu usePortal />
      <Popover usePortal={false} />
      <Select usePortal={true} />
      <SplitButton />
      <LeafyGreenTooltip usePortal={false} />
      <Popover />
      <Popover renderMode="inline" usePortal={false} />
      <Popover renderMode="portal" usePortal={true} />
      <Popover usePortal>
        <Child usePortal={false} />
      </Popover>
      <Popover usePortal={false} />
      <Popover usePortal={true} {...spreadProps} />
      <Popover {...spreadProps} />
      <WrappedPopover />
      <DefaultWrappedPopover />
    </>
  );
};
