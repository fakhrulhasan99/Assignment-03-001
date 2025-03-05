/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        adlam: ['"ADLaM Display"', 'cursive'],
        sora: ['"Sora"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};