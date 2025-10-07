import React, { useState } from 'react';

import Badge from '@azublue-ui/badge';
import Button from '@azublue-ui/button';
import Card from '@azublue-ui/card';
import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/azublue-provider';
import { Body } from '@azublue-ui/typography';

export default {
  title: 'AzuBlue Provider/DarkMode',
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const DarkModeComponent = () => {
  const { darkMode, theme, setDarkMode } = useDarkMode();

  return (
    <Card darkMode={darkMode}>
      <Body>
        Currently in <Badge>{`${theme}`}</Badge> mode
      </Body>
      <br />
      <Button onClick={() => setDarkMode(!darkMode)}>Toggle context</Button>
    </Card>
  );
};

export const DarkModeDemo = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <AzuBlueProvider darkMode={darkMode}>
        <DarkModeComponent />
      </AzuBlueProvider>
      <br />
      <Button onClick={() => setDarkMode(!darkMode)}>Toggle outer state</Button>
      <br />
      <div>
        Outer state darkMode: <Badge>{`${darkMode}`}</Badge>
      </div>
    </>
  );
};
DarkModeDemo.parameters = {
  chromatic: { disableSnapshot: true },
};
