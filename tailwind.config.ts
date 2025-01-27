/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'spin-slow': 'spin 4s linear infinite',
        'spin-reverse': 'spin-reverse 4s linear infinite',
        'pulse-glow': 'pulseGlow 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 50px 10px rgba(255, 223, 0, 0.5)' },
          '50%': { boxShadow: '0 0 100px 30px rgba(255, 223, 0, 0.2)' },
        },
      },
    },
  },
  plugins: [],
};
