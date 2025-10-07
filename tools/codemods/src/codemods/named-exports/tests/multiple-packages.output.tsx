import React from 'react';

import { Button } from '@azublue-ui/button';
import { Checkbox } from '@azublue-ui/checkbox';
import { Modal } from '@azublue-ui/modal';
import { Tooltip } from '@azublue-ui/tooltip';

const App = () => {
  return (
    <div>
      <Button>Click me</Button>
      <Modal open={false}>Modal content</Modal>
      <Checkbox checked={false}>Checkbox</Checkbox>
      <Tooltip>Tooltip content</Tooltip>
    </div>
  );
};

export default App;
