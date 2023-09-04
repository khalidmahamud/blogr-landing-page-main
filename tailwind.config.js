/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'Light-red': 'hsl(356, 100%, 66%)'
,        'Very-light-red': 'hsl(355, 100%, 74%)',
        'Very-dark-blue': 'hsl(208, 49%, 24%)',
        'Grayish-blue': 'hsl(240, 2%, 79%)',
        'Very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
        'Very-dark-black-blue': 'hsl(240, 10%, 16%)',
        
        // background gradient - mobile nav
        'Very-light-red': 'hsl(13, 100%, 72%)',
        'Light-red': 'hsl(353, 100%, 62%)',

         // background gradient - body
        'Very-dark-gray-blue': 'hsl(237, 17%, 21%)',
        'Very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

