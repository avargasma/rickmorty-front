/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'purple-lighter':'#EEE3FF',
        'purple-light':'#8054C7',
        'purple':'#5A3696',
        'green-ligt':'#63D838',
        'cool-grey': '#F3F4F6',
      }
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

