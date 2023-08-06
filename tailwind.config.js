/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundImage: {
      'logo': "url('./assets/img/logo.png')",
      
    },
    colors: {
      'color-primary': '#f38e82',
      'color-grad-1': '#fbdb89',
      'color-grad-2': '#f48982',

      'color-grey-light-1': '#f9f5f3',
      'color-grey-light-2': '#f2efee',
      'color-grey-light-3': '#d3c7c3',
      '$color-grey-dark-1': '#615551',
      '$color-grey-dark-2': '#918581',

      
    },
    spacing: {'big':'48rem'},
    },
    
  },
  plugins: ['macros'],
}

