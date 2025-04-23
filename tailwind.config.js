/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B2447',
          light: '#1A3A68',
          dark: '#081B36',
        },
        secondary: {
          DEFAULT: '#19A7CE',
          light: '#3DBDE0',
          dark: '#1590B1',
        },
        accent: {
          DEFAULT: '#E5D283',
          light: '#EDE0A3',
          dark: '#D1BC5E',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg')",
      },
      animation: {
        'text-slide': 'textSlide 5s infinite alternate',
      },
      keyframes: {
        textSlide: {
          '0%, 16.667%': { transform: 'translateY(0%)' },
          '33.333%, 50%': { transform: 'translateY(-33.333%)' },
          '66.667%, 83.333%': { transform: 'translateY(-66.667%)' },
        },
      },
    },
  },
  plugins: [],
};