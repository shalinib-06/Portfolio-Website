/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0a192f',
        'darker-blue': '#000000', // Pure black
        'accent-blue': '#1e3a5f',
        'light-blue': '#64ffda',
        'card-bg': '#0a192f', // Dark blue for cards
        'shiny-blue': '#1e40af', // Dark shiny blue
        'gradient-blue-start': '#1e3a8a',
        'gradient-blue-end': '#3b82f6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}



