/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        'mouse':["Mouse Memoirs", "sans-serif"]
      },
      borderRadius:{
        'half': '50px',
      },
      margin:{
        '-4rem':'-4rem',
      },
      colors:{
        'paragraph':'#887DC0',
      },
      rotate:{
        'y-180': 'rotateY(180deg)',
      },
      lineHeight:{
        'THL':'3rem'
      }
    },
  },
  plugins: [],
}

