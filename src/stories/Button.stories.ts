import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '@/components/buttons/button.vue';

const meta : Meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;
export const Primary: Story = {};

