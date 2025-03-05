/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        adlam: ['"ADLaM Display"', 'cursive'],
        sora: ['"Sora"', 'sans-serif'],
      },
      backgroundImage: {
        'bg-cat': "url('/images/cat-big.png')",
      },
    },
  },
  plugins: [],
};