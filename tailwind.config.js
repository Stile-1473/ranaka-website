/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D4F3C',
        'primary-light': '#1A6B52',
        'primary-dark': '#063D2C',
        accent: '#C9A227',
        'accent-light': '#D4B84A',
        'accent-dark': '#A68620',
        secondary: '#FFFFFF',
        'text-dark': '#1A1A2E',
        'text-medium': '#4A5568',
        'text-light': '#718096',
        cream: '#FEFDF5',
        'bg-light': '#F8FAFC',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
      spacing: {
        'container': '1200px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
