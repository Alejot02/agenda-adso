/** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
     "./*.css", 
  ],
  theme: {
    extend: {
      colors: {
        senaPurple: "#7c3aed",
        senaPurpleDark: "#5b21b6",
      },
    },
  },
  plugins: [],
};

