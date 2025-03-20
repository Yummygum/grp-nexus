import { expect, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import LayoutA from './LayoutA.vue';

const meta = {
  title: 'Components/Layouts/LayoutA',
  component: LayoutA,
  render: () => ({
    components: { LayoutA },
    template: '<layout-a />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof LayoutA>;

export default meta;
type Story = StoryObj<typeof meta>;


export const PageA: Story = {};
