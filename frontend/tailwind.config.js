/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#1a1a2e',
          600: '#2a2a4e',
        }
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease forwards',
      }
    },
  },
  plugins: [],
}

