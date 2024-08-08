import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './storybook/**/*.{ts,tsx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        alpha: {
          DEFAULT: 'hsla(0, 0%, 0%, 0)',
          foreground: 'hsla(0, 0%, 0%, 1)',
          '50': 'hsla(0, 0%, 0%, 0.04)',
          '100': 'hsla(0, 0%, 0%, 0.08)',
          '150': 'hsla(0, 0%, 0%, 0.12)',
          '300': 'hsla(0, 0%, 0%, 0.32)',
          '700': 'hsla(0, 0%, 0%, 0.72)',
          '800': 'hsla(0, 0%, 0%, 0.8)',
          '900': 'hsla(0, 0%, 0%, 1)'
        },
        neutral: {
          DEFAULT: 'hsla(0, 0%, 100%, 1)',
          foreground: 'hsla(0, 0%, 0%, 1)',
          '50': 'hsla(60, 5%, 96%, 1)',
          '400': 'hsla(0, 0%, 64%, 1)',
          '600': 'hsla(0, 0%, 32%, 1)'
        },
        primary: {
          DEFAULT: 'hsla(25, 90%, 54%, 1)',
          foreground: 'hsla(0, 0%, 100%, 1)',
          '100': 'hsla(35, 95%, 92%, 1)',
          '200': 'hsla(35, 100%, 86%, 1)',
          '400': 'hsla(27, 91%, 61%, 1)',
          '500': 'hsla(25, 90%, 54%, 1)',
          '600': 'hsla(21, 85%, 48%, 1)',
          '700': 'hsla(17, 83%, 40%, 1)'
        },
        red: {
          '400': 'hsla(0, 86%, 63%, 1)'
        },
        green: {
          '400': 'hsla(85, 59%, 58%, 1)'
        }
      },
      fontFamily: {
        sans: 'var(--font-sans, ui-sans-serif)'
      },
      boxShadow: {
        'button-hover': '0px -4px 8px 0px rgba(246, 147, 65, 0.40)'
      },
      fontSize: {
        '3xl': [
          '2rem',
          {
            lineHeight: '2.5rem'
          }
        ],
        '4xl': [
          '2.5rem',
          {
            lineHeight: '3.5rem'
          }
        ],
        '6xl': [
          '4rem',
          {
            lineHeight: '4.5rem'
          }
        ]
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
