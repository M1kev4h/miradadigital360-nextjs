import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--Color-Bg)",
        secondary: "var(--verdesito)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-squada-one)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
