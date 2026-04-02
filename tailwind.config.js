/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f6b4e",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // px-4
          md: "3rem", // md:px-12
        },
      },
    },
  },
  plugins: [],
};
