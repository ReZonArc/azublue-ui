import React from 'react';
import ReactMarkdown from 'react-markdown';

import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';
import { getTheme } from '@azublue-ui/lib';
import { useUpdatedBaseFontSize } from '@azublue-ui/typography';

import componentsMap from './componentsMap';
import { getWrapperStyles } from './LGMarkdown.styles';
import { LGMarkdownProps } from '.';

export const LGMarkdown = ({
  children,
  className,
  components,
  darkMode: darkModeProp,
  baseFontSize: baseFontSizeProp,
  ...rest
}: LGMarkdownProps) => {
  const { darkMode } = useDarkMode(darkModeProp);
  const baseFontSize = useUpdatedBaseFontSize(baseFontSizeProp); // get context base font size
  const providerBaseFontSize: 14 | 16 = baseFontSize === 13 ? 14 : 16; // todo: update when LGProvider switches to 13/16
  return (
    <AzuBlueProvider darkMode={darkMode} baseFontSize={providerBaseFontSize}>
      <div
        className={getWrapperStyles({ className, theme: getTheme(darkMode) })}
      >
        <ReactMarkdown
          components={{ ...componentsMap, ...components }}
          {...rest}
        >
          {children}
        </ReactMarkdown>
      </div>
    </AzuBlueProvider>
  );
};

LGMarkdown.displayName = 'LGMarkdown';
