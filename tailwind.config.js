/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-theme": "#343541",

        "bg-input": "#3E3F4B",
        "bg-side": "#202123",
        "bg-ans": "#444654",
      },
    },
  },
  plugins: [],
};
