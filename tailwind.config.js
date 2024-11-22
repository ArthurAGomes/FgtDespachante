/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDarkBlue: "#0B4159",
        customOrange: "#E59149",
      },
    },
  },
  plugins: [],
};
