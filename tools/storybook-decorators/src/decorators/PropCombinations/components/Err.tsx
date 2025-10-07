import React from 'react';

import Banner from '@azublue-ui/banner';
import { css } from '@azublue-ui/emotion';

/**
 * Renders an error message, and logs an error
 */
export function Err(msg: string): JSX.Element {
  console.error(msg);
  return (
    <Banner
      variant="danger"
      className={css`
        margin: 24px;
      `}
    >
      {msg}
    </Banner>
  );
}
