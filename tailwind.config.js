module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      current: 'currentColor',
      'black' : '#323232',
      'pink': '#FA4EAB',
      'pinkbg': '#FFF2F9',
      'green': '#C1F4C5',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
