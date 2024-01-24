import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ThemeState } from '@/interfaces/stores/theme'
import { toast } from '@/helpers/info'

export const useThemeStore = defineStore('theme', () => {
  const state = ref<ThemeState>({
    pallete: {
      '--color-primary': '#16CBC2',
      '--color-primary-light': '#98E9E0',
      '--color-primary-super-light': '#F1F6FB',
      '--color-primary-lines': '#E8ECEB',
      '--color-primary-lines-light': '#F5F8F7',
      '--color-primary-background': '#f4fcfc',
      '--color-secondary': '#16CBC2',
      '--color-secondary-light': '#98E9E0',
      '--color-secondary-super-light': '#F1F6FB',
      '--color-secondary-lines': '#E8ECEB',
      '--color-secondary-lines-light': '#F5F8F7',
      '--color-secondary-background': '#f4fcfc',
    }
  })

  const setTheme = (pallete: ThemeState['pallete'] | null = null) => {
    Object.entries(pallete ?? state.value.pallete).forEach(([key, value]) => {
      document.body.style.setProperty(key, value);
    });
  }

  const fetchTheme = async () => {
    try {
      const response = await fetch('http://localhost:3000/theme.json');
      const data = await response.json();
      state.value.pallete = data;
      return { success: true, data: data }
    } catch (error) {
      toast({ msg: 'Theme not found' })
      return { success: false }
    }
  }
  
  return { state, setTheme, fetchTheme }
})
