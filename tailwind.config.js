const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      santorini: {
        s_light: '#EFFFFD',
        light: '#40C3D6',
        med: '#336CCE',
        dark: '#4149C3',
        s_dark: '#416D83',
      },
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
    },
    letterSpacing: {
      wider: '0.05rem',
      widest: '0.5rem',
      swidest: '2rem',
    },
    extend: {
      fontFamily: {
        PT_Sans: ['PT Sans', 'sans-serif'],
        Laviossa: ['Laviossa'],
      },
      backgroundImage: {
        'header-pattern': "url('/src/assets/images/Group-26.png')",
        'header-pattern-2':
          "url('/src/assets/images/Group-26-1.png')",
        'gradient-radial':
          'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-at-t':
          'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b':
          'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-l':
          'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'gradient-radial-at-r':
          'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'gradient-radial-at-tl':
          'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'gradient-radial-at-tr':
          'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'gradient-radial-at-bl':
          'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'gradient-radial-at-br':
          'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
