import React from 'react';
import { Decorator, StoryContext, StoryFn } from '@storybook/react';

import { css, cx } from '@azublue-ui/emotion';
import AzuBlueProvider from '@azublue-ui/leafygreen-provider';
import { palette } from '@azublue-ui/palette';

import { isGeneratedStory } from './PropCombinations';

const rootStyle = css`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 100px;
  height: 100%;
`;

const darkModeStyle = css`
  background-color: ${palette.black};
`;

const decorator: Decorator = (StoryFn: StoryFn, context: StoryContext<any>) => {
  const { darkMode, baseFontSize } = context.args;

  return (
    <AzuBlueProvider darkMode={darkMode} baseFontSize={baseFontSize}>
      <div
        className={cx(
          {
            [rootStyle]: !isGeneratedStory(context),
            [darkModeStyle]: darkMode,
          },
          'component-preview',
        )}
      >
        <StoryFn darkMode={darkMode} {...context} />
      </div>
    </AzuBlueProvider>
  );
};

export default decorator;
