<img src="./.storybook/static/azublue-ui-banner.png" width="100%"/>

<h1 align="center">AzuBlue UI</h1>

<p align="center">A library of React components, CSS patterns, and CLI tools for MongoDB's AzuBlue Design System.</p>

<p align="center">
   <a align="center" href="https://mongodb.design">
      <img src="https://img.shields.io/badge/mongodb.design-112733?style=for-the-badge&logo=mongodb&logoColor=00ED64.svg" alt="mongodb.design">
   </a>
</p>

<p align="center">
   <a href="https://storybook.mongodb.design">
      <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg" alt="Storybook"/>
   </a>
</p>

<p align="center">
   <img alt="Release" src="https://github.com/mongodb/leafygreen-ui/actions/workflows/release.yml/badge.svg"/>
   <img alt="License" src="https://img.shields.io/github/license/mongodb/leafygreen-ui">
</p>

## Getting Started

### With AzuBlue CLI

1. Create or open a React project
2. Install the AzuBlue CLI

```bash
npm install -g @az-tools/cli
```

3. Install all, or some AzuBlue components

```bash
az install
```

```bash
az install button combobox
```

3. Import AzuBlue components into your project

```tsx
import Button from '@azublue-ui/button';
import { Combobox, ComboboxOptions } from '@azublue-ui/combobox';
```

### Without CLI

1. Create or open a React project
2. Install individual AzuBlue components using `npm`, `pnpm`, or `yarn`

```bash
pnpm add @azublue-ui/button
```

3. Import AzuBlue components into your project

```tsx
import Button from '@azublue-ui/button';
```

## Packages

| Package                                                              | Latest                                                                                                                                          | Downloads                                                                                  | Live Example                                                                          |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [@azublue-ui/a11y](./packages/a11y)                               | [![version](https://img.shields.io/npm/v/@azublue-ui/a11y)](https://www.npmjs.com/package/@azublue-ui/a11y)                               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/a11y?color=white)                | [Live Example](http://mongodb.design/component/a11y/live-example)                     |
| [@azublue-ui/avatar](./packages/avatar)                           | [![version](https://img.shields.io/npm/v/@azublue-ui/avatar)](https://www.npmjs.com/package/@azublue-ui/avatar)                           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/avatar?color=white)              | [Live Example](http://mongodb.design/component/avatar/live-example)                   |
| [@azublue-ui/badge](./packages/badge)                             | [![version](https://img.shields.io/npm/v/@azublue-ui/badge)](https://www.npmjs.com/package/@azublue-ui/badge)                             | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/badge?color=white)               | [Live Example](http://mongodb.design/component/badge/live-example)                    |
| [@azublue-ui/banner](./packages/banner)                           | [![version](https://img.shields.io/npm/v/@azublue-ui/banner)](https://www.npmjs.com/package/@azublue-ui/banner)                           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/banner?color=white)              | [Live Example](http://mongodb.design/component/banner/live-example)                   |
| [@azublue-ui/box](./packages/box)                                 | [![version](https://img.shields.io/npm/v/@azublue-ui/box)](https://www.npmjs.com/package/@azublue-ui/box)                                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/box?color=white)                 | [Live Example](http://mongodb.design/component/box/live-example)                      |
| [@azublue-ui/button](./packages/button)                           | [![version](https://img.shields.io/npm/v/@azublue-ui/button)](https://www.npmjs.com/package/@azublue-ui/button)                           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/button?color=white)              | [Live Example](http://mongodb.design/component/button/live-example)                   |
| [@azublue-ui/callout](./packages/callout)                         | [![version](https://img.shields.io/npm/v/@azublue-ui/callout)](https://www.npmjs.com/package/@azublue-ui/callout)                         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/callout?color=white)             | [Live Example](http://mongodb.design/component/callout/live-example)                  |
| [@azublue-ui/card](./packages/card)                               | [![version](https://img.shields.io/npm/v/@azublue-ui/card)](https://www.npmjs.com/package/@azublue-ui/card)                               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/card?color=white)                | [Live Example](http://mongodb.design/component/card/live-example)                     |
| [@azublue-ui/checkbox](./packages/checkbox)                       | [![version](https://img.shields.io/npm/v/@azublue-ui/checkbox)](https://www.npmjs.com/package/@azublue-ui/checkbox)                       | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/checkbox?color=white)            | [Live Example](http://mongodb.design/component/checkbox/live-example)                 |
| [@azublue-ui/chip](./packages/chip)                               | [![version](https://img.shields.io/npm/v/@azublue-ui/chip)](https://www.npmjs.com/package/@azublue-ui/chip)                               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/chip?color=white)                | [Live Example](http://mongodb.design/component/chip/live-example)                     |
| [@azublue-ui/code](./packages/code)                               | [![version](https://img.shields.io/npm/v/@azublue-ui/code)](https://www.npmjs.com/package/@azublue-ui/code)                               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/code?color=white)                | [Live Example](http://mongodb.design/component/code/live-example)                     |
| [@azublue-ui/code-editor](./packages/code-editor)                 | [![version](https://img.shields.io/npm/v/@azublue-ui/code-editor)](https://www.npmjs.com/package/@azublue-ui/code-editor)                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/code-editor?color=white)         | [Live Example](http://mongodb.design/component/code-editor/live-example)              |
| [@azublue-ui/combobox](./packages/combobox)                       | [![version](https://img.shields.io/npm/v/@azublue-ui/combobox)](https://www.npmjs.com/package/@azublue-ui/combobox)                       | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/combobox?color=white)            | [Live Example](http://mongodb.design/component/combobox/live-example)                 |
| [@azublue-ui/confirmation-modal](./packages/confirmation-modal)   | [![version](https://img.shields.io/npm/v/@azublue-ui/confirmation-modal)](https://www.npmjs.com/package/@azublue-ui/confirmation-modal)   | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/confirmation-modal?color=white)  | [Live Example](http://mongodb.design/component/confirmation-modal/live-example)       |
| [@azublue-ui/context-drawer](./packages/context-drawer)           | [![version](https://img.shields.io/npm/v/@azublue-ui/context-drawer)](https://www.npmjs.com/package/@azublue-ui/context-drawer)           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/context-drawer?color=white)      | [Live Example](http://mongodb.design/component/context-drawer/live-example)           |
| [@azublue-ui/copyable](./packages/copyable)                       | [![version](https://img.shields.io/npm/v/@azublue-ui/copyable)](https://www.npmjs.com/package/@azublue-ui/copyable)                       | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/copyable?color=white)            | [Live Example](http://mongodb.design/component/copyable/live-example)                 |
| [@azublue-ui/date-picker](./packages/date-picker)                 | [![version](https://img.shields.io/npm/v/@azublue-ui/date-picker)](https://www.npmjs.com/package/@azublue-ui/date-picker)                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/date-picker?color=white)         | [Live Example](http://mongodb.design/component/date-picker/live-example)              |
| [@azublue-ui/date-utils](./packages/date-utils)                   | [![version](https://img.shields.io/npm/v/@azublue-ui/date-utils)](https://www.npmjs.com/package/@azublue-ui/date-utils)                   | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/date-utils?color=white)          | [Live Example](http://mongodb.design/component/date-utils/live-example)               |
| [@azublue-ui/descendants](./packages/descendants)                 | [![version](https://img.shields.io/npm/v/@azublue-ui/descendants)](https://www.npmjs.com/package/@azublue-ui/descendants)                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/descendants?color=white)         | [Live Example](http://mongodb.design/component/descendants/live-example)              |
| [@azublue-ui/drawer](./packages/drawer)                           | [![version](https://img.shields.io/npm/v/@azublue-ui/drawer)](https://www.npmjs.com/package/@azublue-ui/drawer)                           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/drawer?color=white)              | [Live Example](http://mongodb.design/component/drawer/live-example)                   |
| [@azublue-ui/emotion](./packages/emotion)                         | [![version](https://img.shields.io/npm/v/@azublue-ui/emotion)](https://www.npmjs.com/package/@azublue-ui/emotion)                         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/emotion?color=white)             | [Live Example](http://mongodb.design/component/emotion/live-example)                  |
| [@azublue-ui/empty-state](./packages/empty-state)                 | [![version](https://img.shields.io/npm/v/@azublue-ui/empty-state)](https://www.npmjs.com/package/@azublue-ui/empty-state)                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/empty-state?color=white)         | [Live Example](http://mongodb.design/component/empty-state/live-example)              |
| [@azublue-ui/expandable-card](./packages/expandable-card)         | [![version](https://img.shields.io/npm/v/@azublue-ui/expandable-card)](https://www.npmjs.com/package/@azublue-ui/expandable-card)         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/expandable-card?color=white)     | [Live Example](http://mongodb.design/component/expandable-card/live-example)          |
| [@azublue-ui/form-field](./packages/form-field)                   | [![version](https://img.shields.io/npm/v/@azublue-ui/form-field)](https://www.npmjs.com/package/@azublue-ui/form-field)                   | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/form-field?color=white)          | [Live Example](http://mongodb.design/component/form-field/live-example)               |
| [@azublue-ui/form-footer](./packages/form-footer)                 | [![version](https://img.shields.io/npm/v/@azublue-ui/form-footer)](https://www.npmjs.com/package/@azublue-ui/form-footer)                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/form-footer?color=white)         | [Live Example](http://mongodb.design/component/form-footer/live-example)              |
| [@azublue-ui/gallery-indicator](./packages/gallery-indicator)     | [![version](https://img.shields.io/npm/v/@azublue-ui/gallery-indicator)](https://www.npmjs.com/package/@azublue-ui/gallery-indicator)     | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/gallery-indicator?color=white)   | [Live Example](http://mongodb.design/component/gallery-indicator/live-example)        |
| [@azublue-ui/guide-cue](./packages/guide-cue)                     | [![version](https://img.shields.io/npm/v/@azublue-ui/guide-cue)](https://www.npmjs.com/package/@azublue-ui/guide-cue)                     | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/guide-cue?color=white)           | [Live Example](http://mongodb.design/component/guide-cue/live-example)                |
| [@azublue-ui/hooks](./packages/hooks)                             | [![version](https://img.shields.io/npm/v/@azublue-ui/hooks)](https://www.npmjs.com/package/@azublue-ui/hooks)                             | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/hooks?color=white)               | [Live Example](http://mongodb.design/component/hooks/live-example)                    |
| [@azublue-ui/icon](./packages/icon)                               | [![version](https://img.shields.io/npm/v/@azublue-ui/icon)](https://www.npmjs.com/package/@azublue-ui/icon)                               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/icon?color=white)                | [Live Example](http://mongodb.design/component/icon/live-example)                     |
| [@azublue-ui/icon-button](./packages/icon-button)                 | [![version](https://img.shields.io/npm/v/@azublue-ui/icon-button)](https://www.npmjs.com/package/@azublue-ui/icon-button)                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/icon-button?color=white)         | [Live Example](http://mongodb.design/component/icon-button/live-example)              |
| [@azublue-ui/info-sprinkle](./packages/info-sprinkle)             | [![version](https://img.shields.io/npm/v/@azublue-ui/info-sprinkle)](https://www.npmjs.com/package/@azublue-ui/info-sprinkle)             | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/info-sprinkle?color=white)       | [Live Example](http://mongodb.design/component/info-sprinkle/live-example)            |
| [@azublue-ui/inline-definition](./packages/inline-definition)     | [![version](https://img.shields.io/npm/v/@azublue-ui/inline-definition)](https://www.npmjs.com/package/@azublue-ui/inline-definition)     | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/inline-definition?color=white)   | [Live Example](http://mongodb.design/component/inline-definition/live-example)        |
| [@azublue-ui/input-option](./packages/input-option)               | [![version](https://img.shields.io/npm/v/@azublue-ui/input-option)](https://www.npmjs.com/package/@azublue-ui/input-option)               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/input-option?color=white)        | [Live Example](http://mongodb.design/component/input-option/live-example)             |
| [@azublue-ui/leafygreen-provider](./packages/leafygreen-provider) | [![version](https://img.shields.io/npm/v/@azublue-ui/leafygreen-provider)](https://www.npmjs.com/package/@azublue-ui/leafygreen-provider) | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/leafygreen-provider?color=white) | [Live Example](http://mongodb.design/component/leafygreen-provider/live-example)      |
| [@azublue-ui/lib](./packages/lib)                                 | [![version](https://img.shields.io/npm/v/@azublue-ui/lib)](https://www.npmjs.com/package/@azublue-ui/lib)                                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/lib?color=white)                 | [Live Example](http://mongodb.design/component/lib/live-example)                      |
| [@azublue-ui/loading-indicator](./packages/loading-indicator)     | [![version](https://img.shields.io/npm/v/@azublue-ui/loading-indicator)](https://www.npmjs.com/package/@azublue-ui/loading-indicator)     | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/loading-indicator?color=white)   | [Live Example](http://mongodb.design/component/loading-indicator/live-example)        |
| [@azublue-ui/logo](./packages/logo)                               | [![version](https://img.shields.io/npm/v/@azublue-ui/logo)](https://www.npmjs.com/package/@azublue-ui/logo)                               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/logo?color=white)                | [Live Example](http://mongodb.design/component/logo/live-example)                     |
| [@azublue-ui/marketing-modal](./packages/marketing-modal)         | [![version](https://img.shields.io/npm/v/@azublue-ui/marketing-modal)](https://www.npmjs.com/package/@azublue-ui/marketing-modal)         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/marketing-modal?color=white)     | [Live Example](http://mongodb.design/component/marketing-modal/live-example)          |
| [@azublue-ui/menu](./packages/menu)                               | [![version](https://img.shields.io/npm/v/@azublue-ui/menu)](https://www.npmjs.com/package/@azublue-ui/menu)                               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/menu?color=white)                | [Live Example](http://mongodb.design/component/menu/live-example)                     |
| [@azublue-ui/modal](./packages/modal)                             | [![version](https://img.shields.io/npm/v/@azublue-ui/modal)](https://www.npmjs.com/package/@azublue-ui/modal)                             | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/modal?color=white)               | [Live Example](http://mongodb.design/component/modal/live-example)                    |
| [@azublue-ui/number-input](./packages/number-input)               | [![version](https://img.shields.io/npm/v/@azublue-ui/number-input)](https://www.npmjs.com/package/@azublue-ui/number-input)               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/number-input?color=white)        | [Live Example](http://mongodb.design/component/number-input/live-example)             |
| [@azublue-ui/ordered-list](./packages/ordered-list)               | [![version](https://img.shields.io/npm/v/@azublue-ui/ordered-list)](https://www.npmjs.com/package/@azublue-ui/ordered-list)               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/ordered-list?color=white)        | [Live Example](http://mongodb.design/component/ordered-list/live-example)             |
| [@azublue-ui/pagination](./packages/pagination)                   | [![version](https://img.shields.io/npm/v/@azublue-ui/pagination)](https://www.npmjs.com/package/@azublue-ui/pagination)                   | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/pagination?color=white)          | [Live Example](http://mongodb.design/component/pagination/live-example)               |
| [@azublue-ui/palette](./packages/palette)                         | [![version](https://img.shields.io/npm/v/@azublue-ui/palette)](https://www.npmjs.com/package/@azublue-ui/palette)                         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/palette?color=white)             | [Live Example](http://mongodb.design/component/palette/live-example)                  |
| [@azublue-ui/password-input](./packages/password-input)           | [![version](https://img.shields.io/npm/v/@azublue-ui/password-input)](https://www.npmjs.com/package/@azublue-ui/password-input)           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/password-input?color=white)      | [Live Example](http://mongodb.design/component/password-input/live-example)           |
| [@azublue-ui/preview-card](./packages/preview-card)               | [![version](https://img.shields.io/npm/v/@azublue-ui/preview-card)](https://www.npmjs.com/package/@azublue-ui/preview-card)               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/preview-card?color=white)        | [Live Example](http://mongodb.design/component/preview-card/live-example)             |
| [@azublue-ui/pipeline](./packages/pipeline)                       | [![version](https://img.shields.io/npm/v/@azublue-ui/pipeline)](https://www.npmjs.com/package/@azublue-ui/pipeline)                       | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/pipeline?color=white)            | [Live Example](http://mongodb.design/component/pipeline/live-example)                 |
| [@azublue-ui/polymorphic](./packages/polymorphic)                 | [![version](https://img.shields.io/npm/v/@azublue-ui/polymorphic)](https://www.npmjs.com/package/@azublue-ui/polymorphic)                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/polymorphic?color=white)         | [Live Example](http://mongodb.design/component/polymorphic/live-example)              |
| [@azublue-ui/popover](./packages/popover)                         | [![version](https://img.shields.io/npm/v/@azublue-ui/popover)](https://www.npmjs.com/package/@azublue-ui/popover)                         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/popover?color=white)             | [Live Example](http://mongodb.design/component/popover/live-example)                  |
| [@azublue-ui/portal](./packages/portal)                           | [![version](https://img.shields.io/npm/v/@azublue-ui/portal)](https://www.npmjs.com/package/@azublue-ui/portal)                           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/portal?color=white)              | [Live Example](http://mongodb.design/component/portal/live-example)                   |
| [@azublue-ui/progress-bar](./packages/progress-bar)               | [![version](https://img.shields.io/npm/v/@azublue-ui/progress-bar)](https://www.npmjs.com/package/@azublue-ui/progress-bar)               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/progress-bar?color=white)        | [Live Example](http://mongodb.design/component/progress-bar/live-example)             |
| [@azublue-ui/radio-box-group](./packages/radio-box-group)         | [![version](https://img.shields.io/npm/v/@azublue-ui/radio-box-group)](https://www.npmjs.com/package/@azublue-ui/radio-box-group)         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/radio-box-group?color=white)     | [Live Example](http://mongodb.design/component/radio-box-group/live-example)          |
| [@azublue-ui/radio-group](./packages/radio-group)                 | [![version](https://img.shields.io/npm/v/@azublue-ui/radio-group)](https://www.npmjs.com/package/@azublue-ui/radio-group)                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/radio-group?color=white)         | [Live Example](http://mongodb.design/component/radio-group/live-example)              |
| [@azublue-ui/ripple](./packages/ripple)                           | [![version](https://img.shields.io/npm/v/@azublue-ui/ripple)](https://www.npmjs.com/package/@azublue-ui/ripple)                           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/ripple?color=white)              | [Live Example](http://mongodb.design/component/ripple/live-example)                   |
| [@azublue-ui/search-input](./packages/search-input)               | [![version](https://img.shields.io/npm/v/@azublue-ui/search-input)](https://www.npmjs.com/package/@azublue-ui/search-input)               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/search-input?color=white)        | [Live Example](http://mongodb.design/component/search-input/live-example)             |
| [@azublue-ui/section-nav](./packages/section-nav)                 | [![version](https://img.shields.io/npm/v/@azublue-ui/section-nav)](https://www.npmjs.com/package/@azublue-ui/section-nav)                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/section-nav?color=white)         | [Live Example](http://mongodb.design/component/section-nav/live-example)              |
| [@azublue-ui/segmented-control](./packages/segmented-control)     | [![version](https://img.shields.io/npm/v/@azublue-ui/segmented-control)](https://www.npmjs.com/package/@azublue-ui/segmented-control)     | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/segmented-control?color=white)   | [Live Example](http://mongodb.design/component/segmented-control/live-example)        |
| [@azublue-ui/select](./packages/select)                           | [![version](https://img.shields.io/npm/v/@azublue-ui/select)](https://www.npmjs.com/package/@azublue-ui/select)                           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/select?color=white)              | [Live Example](http://mongodb.design/component/select/live-example)                   |
| [@azublue-ui/side-nav](./packages/side-nav)                       | [![version](https://img.shields.io/npm/v/@azublue-ui/side-nav)](https://www.npmjs.com/package/@azublue-ui/side-nav)                       | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/side-nav?color=white)            | [Live Example](http://mongodb.design/component/side-nav/live-example)                 |
| [@azublue-ui/skeleton-loader](./packages/skeleton-loader)         | [![version](https://img.shields.io/npm/v/@azublue-ui/skeleton-loader)](https://www.npmjs.com/package/@azublue-ui/skeleton-loader)         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/skeleton-loader?color=white)     | [Live Example](http://mongodb.design/component/skeleton-loader/live-example)          |
| [@azublue-ui/split-button](./packages/split-button)               | [![version](https://img.shields.io/npm/v/@azublue-ui/split-button)](https://www.npmjs.com/package/@azublue-ui/split-button)               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/split-button?color=white)        | [Live Example](http://mongodb.design/component/split-button/live-example)             |
| [@azublue-ui/stepper](./packages/stepper)                         | [![version](https://img.shields.io/npm/v/@azublue-ui/stepper)](https://www.npmjs.com/package/@azublue-ui/stepper)                         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/stepper?color=white)             | [Live Example](http://mongodb.design/component/stepper/live-example)                  |
| [@azublue-ui/table](./packages/table)                             | [![version](https://img.shields.io/npm/v/@azublue-ui/table)](https://www.npmjs.com/package/@azublue-ui/table)                             | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/table?color=white)               | [Live Example](http://mongodb.design/component/table/live-example)                    |
| [@azublue-ui/tabs](./packages/tabs)                               | [![version](https://img.shields.io/npm/v/@azublue-ui/tabs)](https://www.npmjs.com/package/@azublue-ui/tabs)                               | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/tabs?color=white)                | [Live Example](http://mongodb.design/component/tabs/live-example)                     |
| [@azublue-ui/testing-lib](./packages/testing-lib)                 | [![version](https://img.shields.io/npm/v/@azublue-ui/testing-lib)](https://www.npmjs.com/package/@azublue-ui/testing-lib)                 | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/testing-lib?color=white)         | [Live Example](http://mongodb.design/component/testing-lib/live-example)              |
| [@azublue-ui/text-area](./packages/text-area)                     | [![version](https://img.shields.io/npm/v/@azublue-ui/text-area)](https://www.npmjs.com/package/@azublue-ui/text-area)                     | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/text-area?color=white)           | [Live Example](http://mongodb.design/component/text-area/live-example)                |
| [@azublue-ui/text-input](./packages/text-input)                   | [![version](https://img.shields.io/npm/v/@azublue-ui/text-input)](https://www.npmjs.com/package/@azublue-ui/text-input)                   | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/text-input?color=white)          | [Live Example](http://mongodb.design/component/text-input/live-example)               |
| [@azublue-ui/toast](./packages/toast)                             | [![version](https://img.shields.io/npm/v/@azublue-ui/toast)](https://www.npmjs.com/package/@azublue-ui/toast)                             | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/toast?color=white)               | [Live Example](http://mongodb.design/component/toast/live-example)                    |
| [@azublue-ui/toggle](./packages/toggle)                           | [![version](https://img.shields.io/npm/v/@azublue-ui/toggle)](https://www.npmjs.com/package/@azublue-ui/toggle)                           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/toggle?color=white)              | [Live Example](http://mongodb.design/component/toggle/live-example)                   |
| [@azublue-ui/tokens](./packages/tokens)                           | [![version](https://img.shields.io/npm/v/@azublue-ui/tokens)](https://www.npmjs.com/package/@azublue-ui/tokens)                           | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/tokens?color=white)              | [Live Example](http://mongodb.design/component/tokens/live-example)                   |
| [@azublue-ui/toolbar](./packages/toolbar)                         | [![version](https://img.shields.io/npm/v/@azublue-ui/toolbar)](https://www.npmjs.com/package/@azublue-ui/toolbar)                         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/toolbar?color=white)             | [Live Example](http://mongodb.design/component/toolbar/live-example)                  |
| [@azublue-ui/tooltip](./packages/tooltip)                         | [![version](https://img.shields.io/npm/v/@azublue-ui/tooltip)](https://www.npmjs.com/package/@azublue-ui/tooltip)                         | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/tooltip?color=white)             | [Live Example](http://mongodb.design/component/tooltip/live-example)                  |
| [@azublue-ui/typography](./packages/typography)                   | [![version](https://img.shields.io/npm/v/@azublue-ui/typography)](https://www.npmjs.com/package/@azublue-ui/typography)                   | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/typography?color=white)          | [Live Example](http://mongodb.design/component/typography/live-example)               |
| [@azublue-ui/vertical-stepper](./packages/vertical-stepper)       | [![version](https://img.shields.io/npm/v/@azublue-ui/vertical-stepper)](https://www.npmjs.com/package/@azublue-ui/vertical-stepper)       | ![downloads](https://img.shields.io/npm/dm/@azublue-ui/vertical-stepper?color=white)    | [Live Example](http://mongodb.design/component/vertical-stepper/live-example)         |
| [@az-charts/chart-card](./charts/chart-card)                         | [![version](https://img.shields.io/npm/v/@az-charts/chart-card)](https://www.npmjs.com/package/@az-charts/chart-card)                           | ![downloads](https://img.shields.io/npm/dm/@az-charts/chart-card?color=white)              | [Live Example](http://mongodb.design/component/chart-card/live-example)               |
| [@az-charts/colors](./charts/colors)                                 | [![version](https://img.shields.io/npm/v/@az-charts/colors)](https://www.npmjs.com/package/@az-charts/colors)                                   | ![downloads](https://img.shields.io/npm/dm/@az-charts/colors?color=white)                  | [Live Example](http://mongodb.design/component/colors/live-example)                   |
| [@az-charts/core](./charts/core)                                     | [![version](https://img.shields.io/npm/v/@az-charts/core)](https://www.npmjs.com/package/@az-charts/core)                                       | ![downloads](https://img.shields.io/npm/dm/@az-charts/core?color=white)                    | [Live Example](http://mongodb.design/component/core/live-example)                     |
| [@az-charts/drag-provider](./charts/drag-provider)                   | [![version](https://img.shields.io/npm/v/@az-charts/drag-provider)](https://www.npmjs.com/package/@az-charts/drag-provider)                     | ![downloads](https://img.shields.io/npm/dm/@az-charts/drag-provider?color=white)           | [Live Example](http://mongodb.design/component/drag-provider/live-example)            |
| [@az-charts/legend](./charts/legend)                                 | [![version](https://img.shields.io/npm/v/@az-charts/legend)](https://www.npmjs.com/package/@az-charts/legend)                                   | ![downloads](https://img.shields.io/npm/dm/@az-charts/legend?color=white)                  | [Live Example](http://mongodb.design/component/legend/live-example)                   |
| [@az-charts/series-provider](./charts/series-provider)               | [![version](https://img.shields.io/npm/v/@az-charts/series-provider)](https://www.npmjs.com/package/@az-charts/series-provider)                 | ![downloads](https://img.shields.io/npm/dm/@az-charts/series-provider?color=white)         | [Live Example](http://mongodb.design/component/series-provider/live-example)          |
| [@az-chat/avatar](./chat/avatar)                                     | [![version](https://img.shields.io/npm/v/@az-chat/avatar)](https://www.npmjs.com/package/@az-chat/avatar)                                       | ![downloads](https://img.shields.io/npm/dm/@az-chat/avatar?color=white)                    | [Live Example](http://mongodb.design/component/avatar/live-example)                   |
| [@az-chat/chat-disclaimer](./chat/chat-disclaimer)                   | [![version](https://img.shields.io/npm/v/@az-chat/chat-disclaimer)](https://www.npmjs.com/package/@az-chat/chat-disclaimer)                     | ![downloads](https://img.shields.io/npm/dm/@az-chat/chat-disclaimer?color=white)           | [Live Example](http://mongodb.design/component/chat-disclaimer/live-example)          |
| [@az-chat/chat-window](./chat/chat-window)                           | [![version](https://img.shields.io/npm/v/@az-chat/chat-window)](https://www.npmjs.com/package/@az-chat/chat-window)                             | ![downloads](https://img.shields.io/npm/dm/@az-chat/chat-window?color=white)               | [Live Example](http://mongodb.design/component/chat-window/live-example)              |
| [@az-chat/fixed-chat-window](./chat/fixed-chat-window)               | [![version](https://img.shields.io/npm/v/@az-chat/fixed-chat-window)](https://www.npmjs.com/package/@az-chat/fixed-chat-window)                 | ![downloads](https://img.shields.io/npm/dm/@az-chat/fixed-chat-window?color=white)         | [Live Example](http://mongodb.design/component/fixed-chat-window/live-example)        |
| [@az-chat/input-bar](./chat/input-bar)                               | [![version](https://img.shields.io/npm/v/@az-chat/input-bar)](https://www.npmjs.com/package/@az-chat/input-bar)                                 | ![downloads](https://img.shields.io/npm/dm/@az-chat/input-bar?color=white)                 | [Live Example](http://mongodb.design/component/input-bar/live-example)                |
| [@az-chat/leafygreen-chat-provider](./chat/leafygreen-chat-provider) | [![version](https://img.shields.io/npm/v/@az-chat/leafygreen-chat-provider)](https://www.npmjs.com/package/@az-chat/leafygreen-chat-provider)   | ![downloads](https://img.shields.io/npm/dm/@az-chat/leafygreen-chat-provider?color=white)  | [Live Example](http://mongodb.design/component/leafygreen-chat-provider/live-example) |
| [@az-chat/lg-markdown](./chat/lg-markdown)                           | [![version](https://img.shields.io/npm/v/@az-chat/lg-markdown)](https://www.npmjs.com/package/@az-chat/lg-markdown)                             | ![downloads](https://img.shields.io/npm/dm/@az-chat/lg-markdown?color=white)               | [Live Example](http://mongodb.design/component/lg-markdown/live-example)              |
| [@az-chat/message](./chat/message)                                   | [![version](https://img.shields.io/npm/v/@az-chat/message)](https://www.npmjs.com/package/@az-chat/message)                                     | ![downloads](https://img.shields.io/npm/dm/@az-chat/message?color=white)                   | [Live Example](http://mongodb.design/component/message/live-example)                  |
| [@az-chat/message-actions](./chat/message-actions)                   | [![version](https://img.shields.io/npm/v/@az-chat/message-actions)](https://www.npmjs.com/package/@az-chat/message-actions)                     | ![downloads](https://img.shields.io/npm/dm/@az-chat/message-actions?color=white)           | [Live Example](http://mongodb.design/component/message-actions/live-example)          |
| [@az-chat/message-feed](./chat/message-feed)                         | [![version](https://img.shields.io/npm/v/@az-chat/message-feed)](https://www.npmjs.com/package/@az-chat/message-feed)                           | ![downloads](https://img.shields.io/npm/dm/@az-chat/message-feed?color=white)              | [Live Example](http://mongodb.design/component/message-feed/live-example)             |
| [@az-chat/message-feedback](./chat/message-feedback)                 | [![version](https://img.shields.io/npm/v/@az-chat/message-feedback)](https://www.npmjs.com/package/@az-chat/message-feedback)                   | ![downloads](https://img.shields.io/npm/dm/@az-chat/message-feedback?color=white)          | [Live Example](http://mongodb.design/component/message-feedback/live-example)         |
| [@az-chat/message-prompts](./chat/message-prompts)                   | [![version](https://img.shields.io/npm/v/@az-chat/message-prompts)](https://www.npmjs.com/package/@az-chat/message-prompts)                     | ![downloads](https://img.shields.io/npm/dm/@az-chat/message-prompts?color=white)           | [Live Example](http://mongodb.design/component/message-prompts/live-example)          |
| [@az-chat/message-rating](./chat/message-rating)                     | [![version](https://img.shields.io/npm/v/@az-chat/message-rating)](https://www.npmjs.com/package/@az-chat/message-rating)                       | ![downloads](https://img.shields.io/npm/dm/@az-chat/message-rating?color=white)            | [Live Example](http://mongodb.design/component/message-rating/live-example)           |
| [@az-chat/rich-links](./chat/rich-links)                             | [![version](https://img.shields.io/npm/v/@az-chat/rich-links)](https://www.npmjs.com/package/@az-chat/rich-links)                               | ![downloads](https://img.shields.io/npm/dm/@az-chat/rich-links?color=white)                | [Live Example](http://mongodb.design/component/rich-links/live-example)               |
| [@az-chat/suggestions](./chat/suggestions)                           | [![version](https://img.shields.io/npm/v/@az-chat/suggestions)](https://www.npmjs.com/package/@az-chat/suggestions)                             | ![downloads](https://img.shields.io/npm/dm/@az-chat/suggestions?color=white)               | [Live Example](http://mongodb.design/component/suggestions/live-example)              |
| [@az-chat/title-bar](./chat/title-bar)                               | [![version](https://img.shields.io/npm/v/@az-chat/title-bar)](https://www.npmjs.com/package/@az-chat/title-bar)                                 | ![downloads](https://img.shields.io/npm/dm/@az-chat/title-bar?color=white)                 | [Live Example](http://mongodb.design/component/title-bar/live-example)                |
| [@az-tools/build](./tools/build)                                     | [![version](https://img.shields.io/npm/v/@az-tools/build)](https://www.npmjs.com/package/@az-tools/build)                                       | ![downloads](https://img.shields.io/npm/dm/@az-tools/build?color=white)                    |                                                                                       |
| [@az-tools/cli](./tools/cli)                                         | [![version](https://img.shields.io/npm/v/@az-tools/cli)](https://www.npmjs.com/package/@az-tools/cli)                                           | ![downloads](https://img.shields.io/npm/dm/@az-tools/cli?color=white)                      |                                                                                       |
| [@az-tools/codemods](./tools/codemods)                               | [![version](https://img.shields.io/npm/v/@az-tools/codemods)](https://www.npmjs.com/package/@az-tools/codemods)                                 | ![downloads](https://img.shields.io/npm/dm/@az-tools/codemods?color=white)                 |                                                                                       |
| [@az-tools/create](./tools/create)                                   | [![version](https://img.shields.io/npm/v/@az-tools/create)](https://www.npmjs.com/package/@az-tools/create)                                     | ![downloads](https://img.shields.io/npm/dm/@az-tools/create?color=white)                   |                                                                                       |
| [@az-tools/install](./tools/install)                                 | [![version](https://img.shields.io/npm/v/@az-tools/install)](https://www.npmjs.com/package/@az-tools/install)                                   | ![downloads](https://img.shields.io/npm/dm/@az-tools/install?color=white)                  |                                                                                       |
| [@az-tools/link](./tools/link)                                       | [![version](https://img.shields.io/npm/v/@az-tools/link)](https://www.npmjs.com/package/@az-tools/link)                                         | ![downloads](https://img.shields.io/npm/dm/@az-tools/link?color=white)                     |                                                                                       |
| [@az-tools/lint](./tools/lint)                                       | [![version](https://img.shields.io/npm/v/@az-tools/lint)](https://www.npmjs.com/package/@az-tools/lint)                                         | ![downloads](https://img.shields.io/npm/dm/@az-tools/lint?color=white)                     |                                                                                       |
| [@az-tools/meta](./tools/meta)                                       | [![version](https://img.shields.io/npm/v/@az-tools/meta)](https://www.npmjs.com/package/@az-tools/meta)                                         | ![downloads](https://img.shields.io/npm/dm/@az-tools/meta?color=white)                     |                                                                                       |
| [@az-tools/slackbot](./tools/slackbot)                               | [![version](https://img.shields.io/npm/v/@az-tools/slackbot)](https://www.npmjs.com/package/@az-tools/slackbot)                                 | ![downloads](https://img.shields.io/npm/dm/@az-tools/slackbot?color=white)                 |                                                                                       |
| [@az-tools/storybook-addon](./tools/storybook-addon)                 | [![version](https://img.shields.io/npm/v/@az-tools/storybook-addon)](https://www.npmjs.com/package/@az-tools/storybook-addon)                   | ![downloads](https://img.shields.io/npm/dm/@az-tools/storybook-addon?color=white)          |                                                                                       |
| [@az-tools/storybook-decorators](./tools/storybook-decorators)       | [![version](https://img.shields.io/npm/v/@az-tools/storybook-decorators)](https://www.npmjs.com/package/@az-tools/storybook-decorators)         | ![downloads](https://img.shields.io/npm/dm/@az-tools/storybook-decorators?color=white)     |                                                                                       |
| [@az-tools/storybook-utils](./tools/storybook-utils)                 | [![version](https://img.shields.io/npm/v/@az-tools/storybook-utils)](https://www.npmjs.com/package/@az-tools/storybook-utils)                   | ![downloads](https://img.shields.io/npm/dm/@az-tools/storybook-utils?color=white)          |                                                                                       |
| [@az-tools/test](./tools/test)                                       | [![version](https://img.shields.io/npm/v/@az-tools/test)](https://www.npmjs.com/package/@az-tools/test)                                         | ![downloads](https://img.shields.io/npm/dm/@az-tools/test?color=white)                     |                                                                                       |
| [@az-tools/test-harnesses](./tools/test-harnesses)                   | [![version](https://img.shields.io/npm/v/@az-tools/test-harnesses)](https://www.npmjs.com/package/@az-tools/test-harnesses)                     | ![downloads](https://img.shields.io/npm/dm/@az-tools/test-harnesses?color=white)           |                                                                                       |
| [@az-tools/update](./tools/update)                                   | [![version](https://img.shields.io/npm/v/@az-tools/update)](https://www.npmjs.com/package/@az-tools/update)                                     | ![downloads](https://img.shields.io/npm/dm/@az-tools/update?color=white)                   |                                                                                       |
| [@az-tools/validate](./tools/validate)                               | [![version](https://img.shields.io/npm/v/@az-tools/validate)](https://www.npmjs.com/package/@az-tools/validate)                                 | ![downloads](https://img.shields.io/npm/dm/@az-tools/validate?color=white)                 |                                                                                       |

## Development

### Setup

1. Node >= 18.0.0 required.

   via [homebrew](https://brew.sh/) with `brew install node`

   via [nodejs installer](https://nodejs.org/en/)

2. Install PNPM >= 9.15.0.

   [PNPM Installation documentation](https://pnpm.io/installation)

3. Clone the repository.

   ```bash
   # Navigate to the directory you'd like to clone the repository into
   $ cd ~/my/repositories

   # Clone the repository.

   # We recommend installing using the SSH address rather than the HTTPS one to make authentication easier for you. To set up SSH authentication with GitHub, see their guide: https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
   ```

4. Install dependencies and link packages.
   ```ts
   pnpm run init
   ```

### Storybook

Start up storybook to see all UI components that exist:

```ts
pnpm start
```

Note: Running storybook doesn't trigger changes in dependencies, only the main component's — e.g. If you're looking at `Button`, and make a change to `Lib`, you need to rebuild `Lib` for Storybook to see those changes in `Button`.

### Building Packages

To rebuild all packages:

```ts
pnpm build
```

To rebuild select packages, filter using `--filter`:

```ts
pnpm build --filter="[package]"
// ex. --filter="@azublue-ui/hooks"
```

### Development within an Application

To actively develop `azublue-ui` components within an application, the following script will link all `azublue-ui` components within your application to the local `azublue-ui` repository.

This will allow you to make changes to your local repository of `azublue-ui` and see those changes immediately reflected within your running application. This allows you to develop both in isolation (within `azublue-ui`) and in the context of your application.

To do this, clone this repository and navigate to the root directory (where `package.json` is located), then run the following:

```
pnpm run link -- ${PATH_TO_APPLICATION}
```

The script does several things in order:

1. This builds every `azublue-ui` component so they are ready to be linked

2. It scans your application for any installed `azublue-ui` components in your `node_modules/@azublue-ui` folder.
   **NOTE:** If the package is new and unpublished/not installed, you will need to create a directory for the new component within your application inside `node_modules/@azublue-ui` before running this command.

3. If any `azublue-ui` components are found then the script uses `pnpm link` to link every `node_modules/@azublue-ui` module to your local `azublue-ui` repository.

After the script completes, you can make changes directly to the component in your local `azublue-ui` repository. Once you do this, run `pnpm build` in the root of the `azublue-ui` repository and the changes will be visible on your running application.

## Creating New Component

### Getting Started

To get started quickly and easily run `pnpm create-package my-new-package`. When you run this command, we create a directory containing all of the boilerplate code that you'll need to start developing your new Component.

Note: it's important to follow the kebab-casing convention described above.

- Add the new component to `build.tsconfig.json`
- If you are using any `azublue-ui` dependencies in your new component, add the dependency to the component directory's `tsconfig.json`.
- Run `pnpm run init` to link all packages before starting development

### Initial Release

The starting version in the generated `package.json` will be 0.0.1, but this will not be published to npm automatically. A new package is only published after its first changeset is added and the resulting "Version Packages" pull request is merged into the `main` branch.

Note: The `create-package` script automatically generates a starter changeset file. By default this is marked as a **minor** release, which will lead to an initial release of 0.1.0. If you'd like the initial release to be a **major** version (1.0.0), this starter changeset file must be manually edited.

## Formatting and linting

When you run `pnpm fix`, we do the following:

- We run `pnpm prettier:fix` so that we have consistently formatted code.
- We run `pnpm eslint:fix` to catch any syntax errors, unused variables, and any other easy-to-catch issues.

To fix all files in the repository, run the following:

```
pnpm fix
```

To check if any files need formatting without automatically formatting them, run the following:

```
pnpm prettier:check
```

To run linting without automatically fixing issues, run the following:

```
pnpm eslint:check
```

## Typechecking

To run typechecking without compiling the code, run the following:

```
pnpm ts
```

## Testing

To run the unit tests for our components, run the following:

```
pnpm test
```

## Committing

When making a PR that contains changes that should be included in a package's changelog, be sure to do so by running:

```
pnpm changeset
```

This will generate a `changes.json` file, keeping track of version upgrades and update descriptions. We follow semver conventions for versioning, so each change will either be major, minor, or patch.

Make sure that the PR includes the changes made by running this command.

## Publishing

1. Merge the automatically generated `Version Packages` PR that will contain appropriate version bumps and changelog documentation.

2. Push the tags from the release up to Github.

```
git push --follow-tags
```

### Publishing Pre-releases

Read more in-depth [pre-release guides here](https://github.com/changesets/changesets/blob/main/docs/prereleases.md)

Pre-releases let you publish an alpha/beta/next version of a component, allowing developers to test a component before fully releasing a component.

Let's imagine we want to publish a `beta` release of some component. Our work is being done on a branch called `new-feature`

1. Create a new branch off your component branch `git checkout -b pre-release`
   - this makes sure your package updates stay independent
2. Enter pre-release mode: `pnpm changeset pre enter beta` (name can be `next`, `beta`, `alpha`, or any other name)
3. Update package versions `pnpm changeset version`
   - This will update any packages with existing changeset files to version `X.Y.Z-beta.0` (or whatever name you used)
4. Commit these updates `git commit -am "Prerelease version packages"`
5. Build the component(s) you're pre-releasing `pnpm build <...components>`
6. Publish the prerelease with `pnpm changeset publish`

Any new work you do should be done in the _original_ (`new-feature`) branch.
To publish a new pre-release version, pull the changes from `new-feature` into branch `pre-release`, and follow steps 3-5.

When `new-feature` is merged into `main`, you can safely delete the `pre-release` branch

## Deploy gh-pages

You can deploy a static build of our Storybook site to gh-pages from the `main` branch.

1. First be sure you've built a static version of Storybook with the script: `build-storybook`
2. Then deploy to gh-pages: `pnpm release:site`

### To deploy to your own mirror of leafygreen-ui

1. Run `pnpm demo:site [your_github_username]`.
2. If you haven't built a static version of Storybook yet, you will be prompted to do so.
3. You will be asked for confirmation before Storybook is published.

## License

The source files in this repository are made available under the terms of the Apache License, version 2.0.
