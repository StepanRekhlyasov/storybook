import type { Meta, StoryObj } from '@storybook/vue3';
import Auth from '@/views/auth/Auth.vue';
import AuthLayout from '@/components/layouts/AuthLayout.vue';
import AuthFormLayout from '@/components/layouts/AuthFormLayout.vue';
import AuthForm from '@/views/auth/AuthForm.vue';
import ResetPasswordForm from '@/views/auth/reset-password/ResetPasswordForm.vue';

const meta : Meta = {
  title: 'Pages/Auth',
  component: AuthForm,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ['color-primary']: '#16CBC2',
    ['color-primary-background']: '#f4fcfc',
    auth_type: 'Email',
    verification_code: true,
    password_input: true,
    support_email: 'support@rocketdoc.co.uk',
    show_logo: true,
    remember_me: true,
    forgot_password: true,
    title: 'RocketDoc',
    resend_time: 30,
  },
  argTypes: {
    ['color-primary']: { table: { category: 'Theme' }, control: 'color' },
    ['color-primary-background']: { table: { category: 'Theme' }, control: 'color' },
    auth_type: { options:  ['Email', 'Phone'], control: { type: 'select' } },
  },
};
export default meta;

type Story = StoryObj<typeof Auth>;
export const EmailAuth: Story = {
  render(args) {
    return {
      components: { Auth, AuthLayout, AuthForm, AuthFormLayout },
      setup() {
        return { args };
      },
      template: `
      <AuthLayout>
        <AuthFormLayout>
          <AuthForm 
            :title="args.title"
            :forgot_password="args.forgot_password"
            :remember_me="args.remember_me"
            :show_logo="args.show_logo"
            :support_email="args.support_email"
            :verification_code="args.verification_code"
            :password_input="args.password_input"
            :auth_type="args.auth_type"
            :resend_time="args.resend_time"
          />
        </AuthFormLayout>
      </AuthLayout>
      `,
    };
  },
};

export const ResetPassword: Story = {
  render(args) {
    return {
      components: { ResetPasswordForm, AuthLayout, AuthForm, AuthFormLayout },
      setup() {
        return { args };
      },
      template: `
      <AuthLayout>
        <AuthFormLayout>
          <ResetPasswordForm 
            :title="args.title"
            :forgot_password="args.forgot_password"
            :remember_me="args.remember_me"
            :show_logo="args.show_logo"
            :support_email="args.support_email"
          />
        </AuthFormLayout>
      </AuthLayout>
      `,
    };
  },
};