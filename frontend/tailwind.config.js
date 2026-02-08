/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        base: '#F5F5F0',
        panel: '#FFFFFF',
        surface: '#EAEAE5',
        line: '#D1D1CB',
        txt: {
          primary: '#1A1918',
          secondary: '#5C5855',
          muted: '#9CA3AF',
        },
        accent: {
          DEFAULT: '#6B5D52',
          dim: 'rgba(107, 93, 82, 0.1)',
        },
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 4s infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotateX(0deg)' },
          '50%': { transform: 'translateY(-20px) rotateX(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
