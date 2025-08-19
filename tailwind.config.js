// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
      },
      colors: {
        middendorp_green: "#60AD56",
        middendorp_darkgreen: "#3E6C50",
        middendorp_white: "#EFF1F3",
        middendorp_black: "#393939"
      },
    },
  },
  plugins: [],
};
