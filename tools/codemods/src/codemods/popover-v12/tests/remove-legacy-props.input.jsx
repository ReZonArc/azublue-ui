import React from 'react';

import LeafyGreenCode from '@azublue-ui/code';
import { DatePicker } from '@azublue-ui/date-picker';
import { GuideCue } from '@azublue-ui/guide-cue';
import { InfoSprinkle } from '@azublue-ui/info-sprinkle';
import InlineDefinition from '@azublue-ui/inline-definition';
import { NumberInput } from '@azublue-ui/number-input';
import { SearchInput as LGSearchInput } from '@azublue-ui/search-input';

const Child = (props) => {
  return <div>{props.children}</div>;
};

export const App = () => {
  const spreadProps = {
    prop: true,
  };

  const WrappedInfoSprinkle = (props) => {
    return <InfoSprinkle usePortal={false} {...props} />;
  };

  return (
    <>
      <LeafyGreenCode usePortal />
      <DatePicker />
      <GuideCue />
      <InfoSprinkle usePortal />
      <InlineDefinition usePortal={false} />
      <NumberInput usePortal={true} />
      <LGSearchInput usePortal />
      <InfoSprinkle />
      <InfoSprinkle
        portalClassName="portal-class"
        portalRef={{ current: null }}
      />
      <InfoSprinkle
        portalContainer={{ current: null }}
        scrollContainer={{ current: null }}
      />
      <InfoSprinkle popoverZIndex={9999} usePortal>
        <Child usePortal={false} />
      </InfoSprinkle>
      <InfoSprinkle usePortal={true} {...spreadProps} />
      <WrappedInfoSprinkle />
    </>
  );
};
