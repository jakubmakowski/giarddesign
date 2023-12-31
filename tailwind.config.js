/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-color-creme": "#DCC1AB",
        "custom-color-green": "#1B5B31",
        "custom-color-grey": "#F5F0EC",
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans'], 
      },
      width: {
        "400-custom": "400px",
        "30-custom": "30px",
        "50-custom": "50px",
        "80-custom": "80px",
        "800-custom": "800px",
        "110-custom": "110px",
        "200-custom": "200px",
        "250-custom": "250px",
        "100-custom": "100px",
      },
      height: { 
        "30-custom": "30px",
        'image-0': '250px',
        'image-1': '601px',
        'image-2': '452px',
        'image-3': '338px',
        'image-4': '451px',
        'image-5': '603px',
        'image-main': '700px',
        'cutomGradient': '1000px',
        'image-full': '1100px',
      },
      margin: {
        '150': '150px',
        '40': "40px",
        '30': "30px",
        '50': "50px",
        '80': "80px",
        '100': "100px",
        '70': "70px",
        '18': "18px",
        '0': "0px",
      },
      colors: {
        customText: '#1B5B31', 
        customBorderBottom: '#1B5B31',
        grey: '#F5F0EC'
      },
      spacing: {
        '75': '75%',
        '1-3': 'calc(33.3333% - 1rem)',
        '100': '100px',
        '80': '80px',
        '0': '0px',
      },
      maxWidth: {
        '1-3': 'calc(33.3333% - 1rem)',
      },
      gradientColorStops: {
        'custom-start': 'rgba(214, 183, 158, 0.00)',
        'custom-end': '#DCC1AB',
      },
      linearGradientDirections: {
        'custom': 'to bottom',
      },
      screens: {
        'sm': '800px',
        'md': '1200px',
      },
    },
  },
  plugins: [],
};
