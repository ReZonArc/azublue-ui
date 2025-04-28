import React, { useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';
import {
  storybookArgTypes,
  storybookExcludedControlParams,
  StoryMetaType,
} from '@lg-tools/storybook-utils';
import { StoryFn, StoryObj } from '@storybook/react';

import Button from '@leafygreen-ui/button';
import { css, cx } from '@leafygreen-ui/emotion';
import { spacing } from '@leafygreen-ui/tokens';
import { Toolbar, ToolbarIconButton } from '@leafygreen-ui/toolbar';
import { Body } from '@leafygreen-ui/typography';

import { DisplayMode, Drawer, DrawerProps } from './Drawer';
import { DrawerStackProvider } from './DrawerStackContext';
import { DrawerWithToolbarWrapper } from './DrawerWithToolbarWrapper';
import { EmbeddedDrawerLayout } from './EmbeddedDrawerLayout';
import { OverlayDrawerLayout } from './OverlayDrawerLayout';

const SEED = 0;
faker.seed(SEED);

const defaultExcludedControls = [
  ...storybookExcludedControlParams,
  'children',
  'open',
];

export default {
  title: 'Components/Drawer',
  component: Drawer,
  decorators: [
    StoryFn => (
      <div
        className={css`
          height: 100%;
          /* width: 100%; */
          display: flex;
          align-items: center;
          margin: -100px;
          width: 100vw;
        `}
      >
        <StoryFn />
      </div>
    ),
  ],
  parameters: {
    default: 'LiveExample',
    controls: {
      exclude: defaultExcludedControls,
    },
  },
  args: {
    displayMode: DisplayMode.Overlay,
    title: 'Drawer Title',
  },
  argTypes: {
    darkMode: storybookArgTypes.darkMode,
    displayMode: {
      control: 'radio',
      description: 'Options to control how the drawer element is displayed',
      options: Object.values(DisplayMode),
    },
    title: {
      control: 'text',
      description: 'Title of the Drawer',
    },
  },
} satisfies StoryMetaType<typeof Drawer>;

const LongContent = () => {
  const paragraphs = useMemo(() => {
    return faker.lorem
      .paragraphs(30, '\n')
      .split('\n')
      .map((p, i) => <Body key={i}>{p}</Body>);
  }, []);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        gap: ${spacing[100]}px;
      `}
    >
      {paragraphs}
    </div>
  );
};

const TemplateComponent: StoryFn<DrawerProps> = ({
  displayMode,
  initialOpen,
  ...rest
}: DrawerProps & {
  initialOpen?: boolean;
}) => {
  const [open, setOpen] = useState(initialOpen ?? true);

  const renderTrigger = () => (
    <Button onClick={() => setOpen(prevOpen => !prevOpen)}>
      Toggle Drawer
    </Button>
  );

  const renderDrawer = () => (
    <Drawer
      {...rest}
      displayMode={displayMode}
      open={open}
      onClose={() => setOpen(false)}
    />
  );

  return displayMode === DisplayMode.Embedded ? (
    <DrawerStackProvider>
      <EmbeddedDrawerLayout
        className={css`
          height: 500px;
        `}
        isDrawerOpen={open}
      >
        <main
          className={css`
            padding: ${spacing[400]}px;
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: ${spacing[200]}px;
          `}
        >
          {renderTrigger()}
          <LongContent />
        </main>
        {renderDrawer()}
      </EmbeddedDrawerLayout>
    </DrawerStackProvider>
  ) : (
    <DrawerStackProvider>
      <div>
        {renderTrigger()}
        {renderDrawer()}
      </div>
    </DrawerStackProvider>
  );
};

export const LiveExample: StoryObj<DrawerProps> = {
  render: TemplateComponent,
  args: {
    children: <LongContent />,
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
    controls: {
      exclude: [...defaultExcludedControls, 'initialOpen'],
    },
  },
};

export const WithToolbarEmbedded: StoryFn<DrawerProps> = (
  args: DrawerProps,
) => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerStackProvider>
      {/*  This logic will be handled internally inside ToolbarDrawerLayout */}
      <EmbeddedDrawerLayout
        className={css`
          height: 80vh;
        `}
        isDrawerOpen={open}
        hasToolbar
      >
        <main
          className={css`
            padding: ${spacing[400]}px;
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: ${spacing[200]}px;
            background: aliceblue;
          `}
        >
          <Button onClick={() => setOpen(prevOpen => !prevOpen)}>
            Toggle Drawer
          </Button>
          <LongContent />
        </main>
        <DrawerWithToolbarWrapper displayMode="embedded" isDrawerOpen={open}>
          <Toolbar
            className={cx(
              css`
                grid-area: toolbar2;
              `,
            )}
          >
            <ToolbarIconButton glyph="Code" label="Code" onClick={() => {}} />
            <ToolbarIconButton glyph="Plus" label="Plus" onClick={() => {}} />
          </Toolbar>
          <Drawer
            displayMode="embedded"
            open={open}
            onClose={() => setOpen(false)}
            title="Drawer Title"
            className={css`
              grid-area: drawer2;
            `}
          >
            <LongContent />
          </Drawer>
        </DrawerWithToolbarWrapper>
        {/*  This logic will be handled internally inside ToolbarDrawerLayout */}
      </EmbeddedDrawerLayout>
    </DrawerStackProvider>
  );
};

export const WithoutToolbarEmbedded: StoryFn<DrawerProps> = (
  args: DrawerProps,
) => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerStackProvider>
      <EmbeddedDrawerLayout
        className={css`
          height: 80vh;
        `}
        isDrawerOpen={open}
      >
        <main
          className={css`
            padding: ${spacing[400]}px;
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: ${spacing[200]}px;
            background: aliceblue;
          `}
        >
          <Button onClick={() => setOpen(prevOpen => !prevOpen)}>
            Toggle Drawer
          </Button>
          <LongContent />
        </main>
        <Drawer
          displayMode="embedded"
          open={open}
          onClose={() => setOpen(false)}
          title="Drawer Title"
        >
          <LongContent />
        </Drawer>
      </EmbeddedDrawerLayout>
    </DrawerStackProvider>
  );
};

export const WithToolbarOverlay: StoryFn<DrawerProps> = (args: DrawerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerStackProvider>
      {/*  This logic will be handled internally inside ToolbarDrawerLayout */}
      <OverlayDrawerLayout
        className={css`
          height: 80vh;
        `}
        isDrawerOpen={open}
        hasToolbar
      >
        <main
          className={css`
            padding: ${spacing[400]}px;
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: ${spacing[200]}px;
            background: aliceblue;
            grid-area: main;
            overflow: scroll;
            height: 100%;
          `}
        >
          <Button onClick={() => setOpen(prevOpen => !prevOpen)}>
            Toggle Drawer
          </Button>
          <LongContent />
          <LongContent />
        </main>
        <DrawerWithToolbarWrapper displayMode="overlay" isDrawerOpen={open}>
          <Toolbar
            className={cx(
              css`
                grid-area: toolbar2;
              `,
            )}
          >
            <ToolbarIconButton
              glyph="Code"
              label="Code"
              onClick={() => setOpen(prevOpen => !prevOpen)}
            />
            <ToolbarIconButton
              glyph="Plus"
              label="Plus"
              onClick={() => setOpen(prevOpen => !prevOpen)}
            />
          </Toolbar>
          <Drawer
            displayMode="overlay"
            open={open}
            onClose={() => setOpen(false)}
            title="Drawer Title"
            className={css`
              transition: none;
              translate: unset;
              grid-area: drawer2;
              display: block;
            `}
          >
            <LongContent />
          </Drawer>
        </DrawerWithToolbarWrapper>
        {/*  This logic will be handled internally inside ToolbarDrawerLayout */}
      </OverlayDrawerLayout>
    </DrawerStackProvider>
  );
};

export const WithoutToolbarOverlay: StoryFn<DrawerProps> = (
  args: DrawerProps,
) => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerStackProvider>
      {/*  This logic will be handled internally inside ToolbarDrawerLayout */}
      <OverlayDrawerLayout
        className={css`
          height: 80vh;
        `}
        isDrawerOpen={open}
      >
        <main
          className={css`
            padding: ${spacing[400]}px;
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: ${spacing[200]}px;
            background: aliceblue;
            /* grid-area: main; */
            overflow: scroll;
            height: 100%;
          `}
        >
          <Button onClick={() => setOpen(prevOpen => !prevOpen)}>
            Toggle Drawer
          </Button>
          <LongContent />
          <LongContent />
        </main>
        <Drawer
          displayMode="overlay"
          open={open}
          onClose={() => setOpen(false)}
          title="Drawer Title"
          className={css`
            display: block;
          `}
        >
          <LongContent />
        </Drawer>
        {/*  This logic will be handled internally inside ToolbarDrawerLayout */}
      </OverlayDrawerLayout>
    </DrawerStackProvider>
  );
};

const MultipleDrawersComponent: StoryFn<DrawerProps> = (args: DrawerProps) => {
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);
  const [openC, setOpenC] = useState(false);

  return (
    <DrawerStackProvider>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          gap: ${spacing[400]}px;
        `}
      >
        <Button onClick={() => setOpenA(prevOpen => !prevOpen)}>
          Toggle Drawer A
        </Button>
        <Button onClick={() => setOpenB(prevOpen => !prevOpen)}>
          Toggle Drawer B
        </Button>
        <Drawer
          {...args}
          open={openA}
          onClose={() => setOpenA(false)}
          title="Drawer A"
        >
          <LongContent />
        </Drawer>
        <Drawer
          {...args}
          open={openB}
          onClose={() => setOpenB(false)}
          title="Drawer B"
        >
          <Button onClick={() => setOpenC(prevOpen => !prevOpen)}>
            Toggle Drawer C
          </Button>
          <LongContent />
        </Drawer>
        <Drawer
          {...args}
          open={openC}
          onClose={() => setOpenC(false)}
          title="Drawer C"
        >
          <LongContent />
        </Drawer>
      </div>
    </DrawerStackProvider>
  );
};

export const MultipleDrawers: StoryObj<DrawerProps> = {
  render: MultipleDrawersComponent,
  args: {
    displayMode: DisplayMode.Overlay,
  },
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
    controls: {
      exclude: defaultExcludedControls,
    },
  },
};

const snapshotStoryExcludedControlParams = [
  ...defaultExcludedControls,
  'darkMode',
  'displayMode',
  'title',
];

export const LightModeOverlay: StoryObj<DrawerProps> = {
  render: TemplateComponent,
  args: {
    children: <LongContent />,
    darkMode: false,
    displayMode: DisplayMode.Overlay,
    open: true,
  },
  parameters: {
    controls: {
      exclude: snapshotStoryExcludedControlParams,
    },
  },
};

export const DarkModeOverlay: StoryObj<DrawerProps> = {
  render: TemplateComponent,
  args: {
    children: <LongContent />,
    darkMode: true,
    displayMode: DisplayMode.Overlay,
    open: true,
  },
  parameters: {
    controls: {
      exclude: snapshotStoryExcludedControlParams,
    },
  },
};

export const LightModeEmbedded: StoryObj<DrawerProps> = {
  render: TemplateComponent,
  args: {
    children: <LongContent />,
    darkMode: false,
    displayMode: DisplayMode.Embedded,
    open: true,
  },
  parameters: {
    controls: {
      exclude: snapshotStoryExcludedControlParams,
    },
  },
};

export const DarkModeEmbedded: StoryObj<DrawerProps> = {
  render: TemplateComponent,
  args: {
    children: <LongContent />,
    darkMode: true,
    displayMode: DisplayMode.Embedded,
    open: true,
  },
  parameters: {
    controls: {
      exclude: snapshotStoryExcludedControlParams,
    },
  },
};
