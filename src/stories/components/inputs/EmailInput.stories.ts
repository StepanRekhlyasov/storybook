import { type Meta, type StoryObj } from '@storybook/vue3';
import EmailInput from '@/components/inputs/EmailInput.vue';
import MyButton from '@/components/inputs/MyButton.vue';
import { ref } from 'vue';

const meta : Meta = {
  title: 'Inputs/Email Input',
  component: EmailInput,
  args: {
    ['color-primary']: '#16CBC2',
  },
  argTypes: {
    ['color-primary']: { table: { category: 'Theme' }, control: 'color' },
  },
};
export default meta;

type Story = StoryObj;
export const Primary: Story = {
  render(args) {
    return {
      setup() {
        const payload = ref({ email: '' });
        const form = ref();
        const rules = {
          email: [
            { required: true, message: 'Please input your email address', trigger: 'blur' },
            { type: 'email', message: 'Please input a valid email address', trigger: ['blur', 'change'] },
          ],
        }
        const handleSubmit = () => window.alert('Validation passed!');
        return { form, rules, payload, handleSubmit, args };
      },
      components: { EmailInput, MyButton },
      template: `
        <a-form ref="form" :rules="rules" novalidate :model="payload" @finish="handleSubmit">
          <a-form-item name="email">
            <EmailInput :placeholder="args.placeholder" v-model:value="payload.email" @input="form.clearValidate()" />
          </a-form-item>
          <MyButton :html_type="'submit'">Validate</MyButton>
        </a-form>
      `,
    };
  }
};