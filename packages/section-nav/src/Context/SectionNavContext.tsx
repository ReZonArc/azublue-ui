import React, { createContext, PropsWithChildren, useContext } from 'react';

import AzuBlueProvider from '@azublue-ui/leafygreen-provider';

import { getLgIds } from '../utils/getLgIds';

import { SectionNavProviderProps } from './SectionNavContext.types';

export const SectionNavContext = createContext<SectionNavProviderProps>({
  lgIds: getLgIds(),
  hasContext: false,
});

export const useSectionNavContext = () =>
  useContext<SectionNavProviderProps>(SectionNavContext);

export const SectionNavContextProvider = ({
  children,
  lgIds,
  hasContext,
  darkMode = false,
}: PropsWithChildren<SectionNavProviderProps>) => {
  const SectionNavProvider = SectionNavContext.Provider;

  const sectionNavProviderData = {
    lgIds,
    hasContext,
  };

  return (
    <AzuBlueProvider darkMode={darkMode}>
      <SectionNavProvider value={sectionNavProviderData}>
        {children}
      </SectionNavProvider>
    </AzuBlueProvider>
  );
};
