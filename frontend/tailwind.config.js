/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        'geist': ['Geist', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#066ac9',
          50: '#e8f2fc',
          100: '#c5dff7',
          200: '#9ecbf2',
          300: '#77b6ed',
          400: '#3d96e4',
          500: '#066ac9',
          600: '#0556a5',
          700: '#044382',
          800: '#033060',
          900: '#021e3e',
        },
        secondary: {
          DEFAULT: '#9a9ea4',
        },
        success: {
          DEFAULT: '#0cbc87',
          soft: 'rgba(12, 188, 135, 0.1)',
        },
        danger: {
          DEFAULT: '#d6293e',
          soft: 'rgba(214, 41, 62, 0.1)',
        },
        warning: {
          DEFAULT: '#f7c32e',
          soft: 'rgba(247, 195, 46, 0.1)',
        },
        info: {
          DEFAULT: '#17a2b8',
          soft: 'rgba(23, 162, 184, 0.1)',
        },
        dark: {
          DEFAULT: '#24292d',
          soft: 'rgba(36, 41, 45, 0.1)',
        },
        light: {
          DEFAULT: '#f5f7f9',
        },
        mode: {
          DEFAULT: '#ffffff',
        },
        'heading': '#24292d',
        'body': '#747579',
        'border-color': '#e1e4e6',
        'dark-surface': '#1a1d21',
        'dark-card': '#212529',
        'dark-heading': '#e1e4e8',
        'dark-body': '#9a9ea4',
        'dark-border': '#2d3238',
      },
      spacing: {
        '18': '4.5rem',
        '70': '70px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['0.9375rem', { lineHeight: '1.6' }],
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
      },
      zIndex: {
        'n1': '-1',
      },
      height: {
        '20px': '20px',
        '40px': '40px',
      },
      width: {
        '40px': '40px',
        '70px': '70px',
      },
    },
  },
  plugins: [],
}