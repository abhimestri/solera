module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      'primary': '#FF7152',
      'secondary' : '#BDBBBB',
     }),
     gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#FF7152',
     }),
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#9BCAE7',
      'border':"#90CEE0"
    }),
    placeholderColor: {
      'primary': '#47A6C2',
    },
    borderWidth: {
      'xsm':'0.1px',
      'sm': '0.5px',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
    },
    textColor: {
      'primary': '#47A6C2',
      'secondary': '#FF7152',
      'WH' : '#ffffff'
    },
    inset: {
     'default' : '15%',
     '1/5': '20%',
     '2/5':'40%',
     '3/5':'60%',
     '4/5':'80%',
     '1':'100%'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
