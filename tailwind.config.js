/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1280px',
          xl: '1440px',
        },
      },
    },
    colors: {
      'primary': '#222d65',
      'secondary': '#f61818',
      'third': '#d9d9d9',
      'fourth': '#ffa818',
      'black': '#121212',
      'white': '#ffffff',
    }
  },
  plugins: [],
}
