import React, { forwardRef, useMemo } from 'react';
import {
  useLeafyGreenChatContext,
  Variant,
} from '@az-chat/leafygreen-chat-provider';

import AzuBlueProvider, {
  useDarkMode,
} from '@azublue-ui/leafygreen-provider';
import { consoleOnce } from '@azublue-ui/lib';

import { MessageActions } from '../MessageActions';
import { MessageVerifiedBanner } from '../MessageBanner';
import { MessageContext } from '../MessageContext';
import { MessageLinks } from '../MessageLinks';
import { MessagePromotion } from '../MessagePromotion';

import { CompactMessage } from './CompactMessage';
import {
  type ActionsType,
  type LinksType,
  type MessageProps,
  MessageSubcomponentProperty,
  type PromotionType,
  type VerifiedBannerType,
} from './Message.types';
import { SpaciousMessage } from './SpaciousMessage';

const BaseMessage = forwardRef<HTMLDivElement, MessageProps>(
  (
    {
      align,
      avatar,
      baseFontSize,
      children,
      componentOverrides,
      darkMode: darkModeProp,
      links,
      linksHeading,
      onLinkClick,
      verified,
      ...rest
    },
    fwdRef,
  ) => {
    const { darkMode } = useDarkMode(darkModeProp);
    const { variant } = useLeafyGreenChatContext();
    const isCompact = variant === Variant.Compact;

    if (
      isCompact &&
      (align ||
        avatar ||
        baseFontSize ||
        componentOverrides ||
        links ||
        linksHeading ||
        onLinkClick ||
        verified)
    ) {
      consoleOnce.warn(
        `@az-chat/message: The Message component's props 'align', 'avatar', 'baseFontSize', 'componentOverrides', 'links', 'linksHeading', 'onLinkClick', and 'verified' are only used in the 'spacious' variant. They will not be rendered in the 'compact' variant set by the provider.`,
      );
    }

    const contextValue = useMemo(
      () => ({
        messageBody: rest.messageBody,
      }),
      [rest.messageBody],
    );

    return (
      <AzuBlueProvider darkMode={darkMode}>
        <MessageContext.Provider value={contextValue}>
          {isCompact ? (
            <CompactMessage ref={fwdRef} {...rest}>
              {children}
            </CompactMessage>
          ) : (
            <SpaciousMessage
              align={align}
              avatar={avatar}
              baseFontSize={baseFontSize}
              componentOverrides={componentOverrides}
              links={links}
              linksHeading={linksHeading}
              onLinkClick={onLinkClick}
              ref={fwdRef}
              verified={verified}
              {...rest}
            >
              {children}
            </SpaciousMessage>
          )}
        </MessageContext.Provider>
      </AzuBlueProvider>
    );
  },
);

BaseMessage.displayName = 'Message';

const Actions = MessageActions as ActionsType;
Actions[MessageSubcomponentProperty.Actions] = true;

const Links = MessageLinks as LinksType;
Links[MessageSubcomponentProperty.Links] = true;

const VerifiedBanner = MessageVerifiedBanner as VerifiedBannerType;
VerifiedBanner[MessageSubcomponentProperty.VerifiedBanner] = true;

const Promotion = MessagePromotion as PromotionType;
Promotion[MessageSubcomponentProperty.Promotion] = true;

export const Message = Object.assign(BaseMessage, {
  Actions,
  Links,
  VerifiedBanner,
  Promotion,
});
