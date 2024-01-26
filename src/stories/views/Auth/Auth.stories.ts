import type { Meta, StoryObj } from '@storybook/vue3';
import Auth from '@/views/Auth/Auth.vue';
import AuthLayout from '@/views/Auth/AuthLayout.vue';
import AuthForm from '@/views/Auth/AuthForm.vue';

const meta : Meta = {
  title: 'Pages/Auth',
  component: AuthForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ['color-primary']: '#16CBC2',
    ['color-primary-background']: '#f4fcfc',
  },
  argTypes: {
    ['color-primary']: { table: { category: 'Theme' }, control: 'color' },
    ['color-primary-background']: { table: { category: 'Theme' }, control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof Auth>;
export const EmailAuth: Story = {
  render(args) {
    return {
      components: { Auth, AuthLayout, AuthForm},
      setup() {
        return { args };
      },
      template: `
      <AuthLayout>
        <AuthForm 
          :title="args.title"
          :forgot_password="args.forgot_password"
          :remember_me="args.remember_me"
          :show_logo="args.show_logo"
          :support_email="args.support_email"
        />
      </AuthLayout>
      `,
    };
  },
};