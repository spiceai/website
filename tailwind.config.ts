import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './storybook/**/*.{ts,tsx}'
  ],
  darkMode: ['class', '[data-mode="dark"]']
} satisfies Config

export default config
