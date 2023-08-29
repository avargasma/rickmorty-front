/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'c-black':'#1F2937',
        'purple-lighter':'#EEE3FF',
        'purple-light':'#8054C7',
        'purple':'#5A3696',
        'green':'#3B8520',
        'green-light':'#63D838',
        'green-lighter':'#3B8520',
        'blue-light':'#2563EB',
        'grey': {
          DEFAULT: '#06b6d4',
          lighter: '#f8fafc',
          100: '#F3F4F6',
          400: '#9CA3AF',
          500:'#6B7280'
        }
      }
    },
    screens:{
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

