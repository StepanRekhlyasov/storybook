import { type Meta, type StoryObj } from '@storybook/vue3';
import MyButton from '@/components/inputs/MyButton.vue';
import { ref } from 'vue';
import PhoneInput from '@/components/inputs/PhoneInput.vue';

const meta : Meta = {
  title: 'Inputs/Phone Input',
  component: PhoneInput,
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
        const phoneValid = ref();
        const rules = {
          phone: [
            { required: true, message: 'Please input your phone', trigger: 'blur' },
            { validator: async () => {
              return Promise[ phoneValid.value === true ? 'resolve' : 'reject']('Please input a valid phone number')
            } },
          ],
        }
        const handleSubmit = () => window.alert('Validation passed!');
        return { form, rules, payload, handleSubmit, phoneValid, args };
      },
      components: { PhoneInput, MyButton },
      template: `
        <a-form ref="form" :rules="rules" novalidate :model="payload" @finish="handleSubmit">
          <a-form-item name="phone">
            <PhoneInput @validation="phoneValid = $event;" v-model:value="payload.phone" @input="form.clearValidate()" />
          </a-form-item>
          <MyButton :html_type="'submit'">Validate</MyButton>
        </a-form>
      `,
    };
  }
};