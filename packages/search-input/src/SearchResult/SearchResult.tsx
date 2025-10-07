import React from 'react';

import { InputOption, InputOptionContent } from '@azublue-ui/input-option';
import { getNodeTextContent } from '@azublue-ui/lib';
import { InferredPolymorphic, PolymorphicAs } from '@azublue-ui/polymorphic';

import { InternalSearchResultProps } from './SearchResult.types';

export const SearchResult = InferredPolymorphic<
  InternalSearchResultProps,
  'li'
>(
  (
    {
      as = 'li' as PolymorphicAs,
      children,
      description,
      disabled,
      className,
      darkMode,
      ...rest
    },
    ref,
  ) => {
    const textContent = getNodeTextContent(children);
    /**
     * If `rest[aria-label]` exists, use that;
     * if `rest['aria-labelledby']` exists, then we have no label;
     * if neither exist we set the label to `textContent`
     */
    const ariaLabel =
      rest['aria-label'] ?? (rest['aria-labelledby'] ? '' : textContent);

    return (
      <InputOption
        {...rest}
        as={as}
        ref={ref}
        className={className}
        disabled={disabled}
        aria-labelledby={rest['aria-labelledby']}
        aria-label={ariaLabel}
      >
        <InputOptionContent description={description} preserveIconSpace={false}>
          <strong>{children}</strong>
        </InputOptionContent>
      </InputOption>
    );
  },
  'SearchResult',
);

SearchResult.displayName = 'SearchResult';
