import React from 'react';

import LGButton from '@azublue-ui/button';
import LGModal from '@azublue-ui/modal';

const App = () => {
  return (
    <div>
      <LGButton>Click me</LGButton>
      <LGModal open={false}>Modal content</LGModal>
    </div>
  );
};

export default App;
