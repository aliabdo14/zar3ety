/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16a34a', // green-600
          hover: '#15803d', // green-700
        },
        secondary: '#64748b', // slate-500
      },
      borderRadius: {
        container: '0.75rem', // 12px
      },
      spacing: {
        section: '2rem', // 32px
      },
      fontFamily: {
        sans: ['Cairo', 'Inter Variable', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
