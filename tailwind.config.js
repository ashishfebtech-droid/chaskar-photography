/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        fadeInDown: 'fadeInDown 1s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out 0.3s backwards',
        lineFlow: 'lineFlow 4s linear infinite',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineFlow: {
          '0%': { top: '-120px' },
          '100%': { top: '100%' },
        },
      },
    },
  },
  plugins: [],
}