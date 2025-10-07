import { noIndirectImportsRule } from '../rules/no-indirect-imports';

import { ruleTester } from './utils/ruleTester.testutils';

ruleTester.run('no-indirect-imports', noIndirectImportsRule, {
  valid: [
    {
      code: `import Button from '@azublue-ui/button'`,
    },
    {
      code: `import { Combobox } from '@azublue-ui/combobox'`,
    },
  ],
  invalid: [
    {
      code: `import Button from 'packages/button'`,
      output: `import Button from '@azublue-ui/button'`,
      errors: [
        {
          messageId: 'issue:importFromPackages',
        },
      ],
    },
    {
      code: `import Button from '../packages/button'`,
      output: `import Button from '@azublue-ui/button'`,
      errors: [
        {
          messageId: 'issue:importFromPackages',
        },
      ],
    },
    {
      code: `import { InternalToast } from 'src/InternalToast'`,
      output: `import { InternalToast } from '../InternalToast'`,
      filename: 'packages/toast/src/ToastContainer/ToastContainer.tsx',
      errors: [
        {
          messageId: 'issue:importFromSrc',
        },
      ],
    },
  ],
});
