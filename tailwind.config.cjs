/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#03001C',
        'mint-green': '#03C988',
      },
      fontFamily: {
        Inter: ['Inter'],
        Montserrat: ['Montserrat'],
      },
      backgroundImage: {
        'hero-img': 'url("assets/hero.svg")',
      },
      backgroundSize: {
        '60%': '60%',
      },
    },
  },
  plugins: [],
};
