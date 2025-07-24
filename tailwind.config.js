/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D', // Near black
        surface: '#1A1A1A',   // Dark grey for cards/surfaces
        primary: '#E0E0E0',   // Off-white for primary text
        secondary: '#00F5FF', // Neon cyan/aqua
        accent: '#9E00FF',    // Vibrant purple
        border: '#333333',   // Subtle border color
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        display: ['Orbitron', 'sans-serif'], // Futuristic, sci-fi font
      },
      boxShadow: {
        'neon-glow': '0 0 5px theme("colors.secondary"), 0 0 10px theme("colors.secondary")',
        'accent-glow': '0 0 5px theme("colors.accent"), 0 0 10px theme("colors.accent")',
      }
    },
  },
  plugins: [],
}
