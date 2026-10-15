/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shantell: ['"Shantell Sans"', 'cursive', 'sans-serif'],
        japanese: ['"Kosugi Maru"', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#189cf4',
          blueDark: '#0e70be',
          pink: '#ff4c8a',
          coral: '#ff6277',
          yellow: '#fcd34d',
          yellowDark: '#f59e0b',
          skyLight: '#e4f0fe',
          skyDark: '#bae0fd',
        }
      },
      boxShadow: {
        'cute': '0 8px 24px rgba(24, 156, 244, 0.15)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.06)',
        'button': '0 6px 0 #0e70be, 0 10px 20px rgba(14, 112, 190, 0.35)',
        'button-pink': '0 6px 0 #db2777, 0 10px 20px rgba(219, 39, 119, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
        pop: 'pop 0.25s ease-out forwards',
      }
    },
  },
  plugins: [],
}
