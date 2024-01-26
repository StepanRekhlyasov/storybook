import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '@/components/inputs/MyButton.vue';

const meta : Meta = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['primary', 'default', 'dashed', 'text', 'link'],
    },
    ['color-primary']: { table: { category: 'Theme' }, control: 'color' },
  },
  args: {
    ['color-primary']: '#16CBC2',
  },
};
export default meta;

type Story = StoryObj;
export const Primary: Story = {};

