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
    return (
      /* Please manually remove prop: popoverZIndex */
      /* Please manually remove prop: portalClassName */
      /* Please manually remove prop: portalContainer */
      /* Please manually remove prop: portalRef */
      /* Please manually remove prop: scrollContainer */
      /* Please manually remove prop: usePortal */
      <InfoSprinkle usePortal={false} {...props} />
    );
  };

  return (
    <>
      <LeafyGreenCode />
      <DatePicker />
      <GuideCue />
      <InfoSprinkle />
      <InlineDefinition />
      <NumberInput />
      <LGSearchInput />
      <InfoSprinkle />
      <InfoSprinkle />
      <InfoSprinkle />
      <InfoSprinkle>
        <Child usePortal={false} />
      </InfoSprinkle>
      {/* Please manually remove prop: popoverZIndex */}
      {/* Please manually remove prop: portalClassName */}
      {/* Please manually remove prop: portalContainer */}
      {/* Please manually remove prop: portalRef */}
      {/* Please manually remove prop: scrollContainer */}
      {/* Please manually remove prop: usePortal */}
      <InfoSprinkle usePortal={true} {...spreadProps} />
      <WrappedInfoSprinkle />
    </>
  );
};
