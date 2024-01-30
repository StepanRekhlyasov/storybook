import { type Meta, type StoryObj } from '@storybook/vue3';
import MyButton from '@/components/inputs/MyButton.vue';
import { ref } from 'vue';
import CodeInput from '@/components/inputs/CodeInput.vue';

const meta : Meta = {
  title: 'Inputs/Code Input',
  component: CodeInput,
  args: {
    ['color-primary']: '#16CBC2',
    ['color-primary-lines-light']: '#F5F8F7',
    num_inputs: 6,
  },
  argTypes: {
    ['color-primary']: { table: { category: 'Theme' }, control: 'color' },
    ['color-primary-lines-light']: { table: { category: 'Theme' }, control: 'color' },
    num_inputs: { options:  [4, 6, 8], control: { type: 'select' } }
  },
};
export default meta;

type Story = StoryObj;
export const Primary: Story = {
  render(args : any) {
    return {
      setup() {
        const payload = ref({
          code: '',
        });
        const form = ref();
        const codeValid = ref();
        const rules = {
          phone: [
            { validator: async () => {
              return Promise[ args.num_inputs === payload.value.code.length ? 'resolve' : 'reject']('Please input a valid code')
            } },
          ],
        }
        const handleSubmit = () => window.alert('Validation passed!');
        return { form, rules, payload, handleSubmit, codeValid, args };
      },
      components: { CodeInput, MyButton },
      template: `
        <a-form ref="form" :rules="rules" novalidate :model="payload" @finish="handleSubmit">
          <a-form-item name="phone">
            <CodeInput 
              @validation="phoneValid = $event;" 
              v-model:value="payload.code" 
              @input="form.clearValidate()" 
              :num_inputs="args.num_inputs"
            />
          </a-form-item>
          <MyButton :html_type="'submit'">Validate</MyButton>
        </a-form>
      `,
    };
  }
};