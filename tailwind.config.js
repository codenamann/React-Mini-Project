/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project
    ],
    theme: {
      extend: {
        colors: {
          primary: "#4F46E5", // Indigo
          secondary: "#F59E0B", // Amber
          accent: "#10B981", // Emerald
        },
        fontFamily: {
          sans: ["Roboto", "sans-serif"],
          display: ["Poppins", "sans-serif"],
        },
        borderRadius: {
          "2xl": "1rem",
          "3xl": "1.5rem",
        },
      },
    },
    plugins: [],
  };
  