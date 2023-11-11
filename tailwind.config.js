/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#ebedda',
        'boston-blue': {
          '50': '#effafc',
          '100': '#d6f0f7',
          '200': '#b1e2f0',
          '300': '#7ccce4',
          '400': '#3facd1',
          '500': '#2596be',
          '600': '#20749a',
          '700': '#215e7d',
          '800': '#234f67',
          '900': '#214358',
          '950': '#112a3b',
      },
      'rock-blue': {
        '50': '#f4f7f9',
        '100': '#ecf0f3',
        '200': '#dce4e9',
        '300': '#c6d2db',
        '400': '#aebccb',
        '500': '#94a3b8',
        '600': '#828fa9',
        '700': '#6f7a93',
        '800': '#5c6677',
        '900': '#4d5462',
        '950': '#2d3139',
    },
    
      },
    },
  },
  plugins: [],
}

