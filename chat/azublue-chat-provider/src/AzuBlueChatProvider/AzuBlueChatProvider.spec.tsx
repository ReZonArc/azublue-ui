import React from 'react';
import { render, screen } from '@testing-library/react';

import {
  AzuBlueChatProvider,
  useAzuBlueChatContext,
} from './AzuBlueChatProvider';
import { Variant } from './AzuBlueChatProvider.types';

const TestComponent = () => {
  const { variant, assistantName } = useAzuBlueChatContext();
  return (
    <div>
      <div data-testid="test-variant">{variant}</div>
      <div data-testid="test-assistant-name">{assistantName}</div>
    </div>
  );
};

describe('AzuBlueChatProvider', () => {
  beforeAll(() => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  test('provides the default variant and assistantName to the context', () => {
    render(
      <AzuBlueChatProvider>
        <TestComponent />
      </AzuBlueChatProvider>,
    );

    const testVariant = screen.getByTestId('test-variant');
    const testAssistantName = screen.getByTestId('test-assistant-name');
    expect(testVariant.textContent).toBe(Variant.Compact);
    expect(testAssistantName.textContent).toBe('MongoDB Assistant');
  });

  test('provides the specified variant and assistantName to the context', () => {
    render(
      <AzuBlueChatProvider
        variant={Variant.Spacious}
        assistantName="Custom Assistant"
      >
        <TestComponent />
      </AzuBlueChatProvider>,
    );

    const testVariant = screen.getByTestId('test-variant');
    const testAssistantName = screen.getByTestId('test-assistant-name');
    expect(testVariant.textContent).toBe(Variant.Spacious);
    expect(testAssistantName.textContent).toBe('Custom Assistant');
  });

  test('allows overriding only the assistantName', () => {
    render(
      <AzuBlueChatProvider assistantName="Custom Assistant">
        <TestComponent />
      </AzuBlueChatProvider>,
    );

    const testVariant = screen.getByTestId('test-variant');
    const testAssistantName = screen.getByTestId('test-assistant-name');
    expect(testVariant.textContent).toBe(Variant.Compact);
    expect(testAssistantName.textContent).toBe('Custom Assistant');
  });
});
