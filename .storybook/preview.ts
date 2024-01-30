import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import '@/assets/scss/main.scss'
import { createPinia } from 'pinia'
import { useThemeStore } from '../src/stores/theme';
import { ref, watch } from 'vue';

const pinia = createPinia();

setup((app) => { 
  app.use(Antd) 
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      },
    },
  },
  args: {
    // ['color-primary']: '#16CBC2',
    // ['color-primary-light']: '#98E9E0',
    // ['color-primary-super-light']: '#F1F6FB',
    // ['color-primary-lines']: '#E8ECEB',
    // ['color-primary-lines-light']: '#F5F8F7',
    // ['color-primary-background']: '#f4fcfc',
    // ['color-secondary']: '#16CBC2',
    // ['color-secondary-light']: '#98E9E0',
    // ['color-secondary-super-light']: '#F1F6FB',
    // ['color-secondary-lines']: '#E8ECEB',
    // ['color-secondary-lines-light']: '#F5F8F7',
    // ['color-secondary-background']: '#f4fcfc',
  },
  argTypes: {
    // ['color-primary']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-primary-light']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-primary-super-light']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-primary-lines']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-primary-lines-light']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-primary-background']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-secondary']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-secondary-light']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-secondary-super-light']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-secondary-lines']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-secondary-lines-light']: { table: { category: 'Theme' }, control: 'color' },
    // ['color-secondary-background']: { table: { category: 'Theme' }, control: 'color' },
  },
  decorators: [
    (story, context) => {
      return {
        components: { story },
        setup() { 
          const themeStore = useThemeStore();
          const style = getComputedStyle(document.body)
          const rerender = ref(true)

          watch(()=>context.args, () => {
            Object.entries(context.args).forEach(([key, value]) => {
              themeStore.state.pallete[`--${key}`] = value
            })
            themeStore.setTheme()
            rerender.value = !rerender.value 
          }, { deep: true, immediate: true})

          return {
            style,
            themeStore,
            rerender
          }
        },
        template: `
          <a-config-provider
            :theme="{
              token: {
                colorPrimary: style.getPropertyValue('--color-primary'),
                colorInfo: style.getPropertyValue('--color-primary'),
                fontFamily: 'Avenir Next Cyr'
              },
            }"
            :rerender="rerender"
          >
            <story/>
          </a-config-provider>
        `,
      }
    },
  ],
}

export default preview
