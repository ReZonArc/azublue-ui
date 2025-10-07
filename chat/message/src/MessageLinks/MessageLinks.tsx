import React, { useState } from 'react';
import { RichLinksArea } from '@az-chat/rich-links';

import { useIdAllocator } from '@azublue-ui/hooks';
import ChevronDownIcon from '@azublue-ui/icon/dist/ChevronDown';
import IconButton from '@azublue-ui/icon-button';
import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';
import { Body } from '@azublue-ui/typography';

import {
  containerStyles,
  getIconStyles,
  getLinksWrapperStyles,
  headerStyles,
  linksInnerWrapperStyles,
} from './MessageLinks.styles';
import { type MessageLinksProps } from './MessageLinks.types';

export function MessageLinks({
  darkMode: darkModeProp,
  headingText = 'Related Resources',
  links,
  onLinkClick,
  ...divProps
}: MessageLinksProps) {
  const { darkMode } = useDarkMode(darkModeProp);

  const [isExpanded, setIsExpanded] = useState(false);

  const headingId = useIdAllocator({ prefix: 'message-links-heading' });
  const contentId = useIdAllocator({ prefix: 'message-links-content' });

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  if (links.length === 0) {
    return null;
  }

  return (
    <AzuBlueProvider darkMode={darkMode}>
      <div className={containerStyles} {...divProps}>
        <div className={headerStyles}>
          <Body id={headingId}>{headingText}</Body>
          <IconButton
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${headingText}`}
            aria-expanded={isExpanded}
            aria-controls={contentId}
            onClick={handleToggle}
            className={getIconStyles(isExpanded)}
          >
            <ChevronDownIcon />
          </IconButton>
        </div>
        <div
          id={contentId}
          role="region"
          aria-labelledby={headingId}
          className={getLinksWrapperStyles(isExpanded)}
        >
          <RichLinksArea
            className={linksInnerWrapperStyles}
            links={links}
            onLinkClick={onLinkClick}
          />
        </div>
      </div>
    </AzuBlueProvider>
  );
}

MessageLinks.displayName = 'MessageLinks';
