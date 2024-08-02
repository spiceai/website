import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}", "./storybook/**/*.{ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
} satisfies Config;

export default config;
