/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rose-red': '#D62D69',
        'teal-blue': '#53BACC',
        'peach': '#FFCBA4',
        'soft-blue': '#A3C4F3',
        'dark-gray': '#333333',
        'light-pastel-1': '#F8E6EE',
        'light-pastel-2': '#E6F4F7',
      },
      fontFamily: {
        'sans': ['Inter', 'Lato', 'Open Sans', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}