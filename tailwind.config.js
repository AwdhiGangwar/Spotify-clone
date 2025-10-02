// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // This makes Tailwind use 'Roboto' as the default sans font
      },
    },
  },
  plugins: [
    
      require('tailwind-scrollbar-hide')
    
    
  ],
};
