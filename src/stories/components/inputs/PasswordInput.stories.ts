import { type Meta, type StoryObj } from '@storybook/vue3';
import PasswordInput from '@/components/inputs/PasswordInput.vue';
import MyButton from '@/components/inputs/MyButton.vue';
import { ref } from 'vue';

const meta : Meta = {
  title: 'Inputs/Password Input',
  component: PasswordInput,
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
        const payload = ref({});
        const form = ref();
        const rules = {
          password: [
            { required: true, message: 'Please input your password', trigger: 'blur' },
            { min: 6, message: 'Password must be at least 6 characters long', trigger: 'blur' },
          ],
        }
        const handleSubmit = () => window.alert('Validation passed!');
        return { form, rules, payload, handleSubmit, args };
      },
      components: { PasswordInput, MyButton },
      template: `
        <a-form ref="form" :rules="rules" novalidate :model="payload" @finish="handleSubmit">
          <a-form-item name="password">
            <PasswordInput :placeholder="args.placeholder" v-model:value="payload.password" @input="form.clearValidate()" />
          </a-form-item>
          <MyButton :html_type="'submit'">Validate</MyButton>
        </a-form>
      `,
    };
  }
};