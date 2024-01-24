import type { Meta, StoryObj } from '@storybook/vue3';
import Auth from '@/views/Auth.vue';

const meta : Meta = {
  title: 'Pages/Auth',
  component: Auth,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Auth>;
export const EmailAuth: Story = {};