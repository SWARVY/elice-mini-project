import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'elice-lightest-violet': '#EFEFF6',
        'elice-light-violet': '#7875C8',
        'elice-violet': '#524FA1',
        'elice-violet-hover': '#423F8C',
        'elice-light-gray': '#F9FAFC',
        'elice-gray': '#F0F1F3',
        'elice-gray-hover': '#E1E2E4',
        'elice-dark-gray': '#5E5F61',
        'elice-darkest-gray': '#222222',
        'elice-green': '#00AB53',
      },
    },
  },
  plugins: [],
};
