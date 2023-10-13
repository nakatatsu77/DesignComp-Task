/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "root-hero-sp": "url('/Images/02.jpg')",
        "root-hero-pc": "url('/Images/01.jpg')",
      },
      screens: {
        md: "840px",
      },
      colors: {
        accent: {
          100: "#CBF34D",
        },
      },
    },
  },
  plugins: [],
};
