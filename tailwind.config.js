/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Black": "#1E2832",
        "primaryBG": "#1e28320d",
        "colorHover": "orange",
      },
      fontFamily: {
        "primary": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

