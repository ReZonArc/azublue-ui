import React from 'react';

import Button from '@azublue-ui/button';
import Card from '@azublue-ui/card';
import Modal from '@azublue-ui/modal';

const App = () => {
  return (
    <div>
      <Button>Click me</Button>
      <Modal open={false}>Modal content</Modal>
      <Card>Card</Card>
    </div>
  );
};

export default App;
