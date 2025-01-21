import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Dark mode is controlled by the `dark` class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        border: 'var(--border)',
      },
      fontSize: {
        sm: '0.707rem',
        base: '1rem',
        xl: '1.414rem',
        '2xl': '1.999rem',
        '3xl': '2.827rem',
        '4xl': '3.997rem',
        '5xl': '5.652rem',
      },
      fontFamily: {
        title: ['Shrikhand', 'cursive', 'Georgia', 'serif'],
        body: ['Scope One', 'serif', 'Helvetica', 'Arial', 'sans-serif'],
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
