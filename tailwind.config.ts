import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
        'text': 'var(--text-color)',
        'second-text': 'var(--second-text-color)',
        'sub-text': 'var(--sub-text-color)',
        'sub-second-text': 'var(--sub-second-text-color)',
        'badge': 'var(--badge-color)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
};
export default config;