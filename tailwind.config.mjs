/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#1f1f1f",
          gray: "#2E2E2E",
          lightGray: "#494949",
          purple: "#8E86FF",
          lightPurple: "#C4C0FF",
          blue: "#C2EAF3",
          pink: "#f15bb5",
          salmon: "#FF9595",
          lightSalmon: "#FFDFDF",
          green: "#4ED880",
          lightGreen: "#DDF2E6",
          beige: "#f9f8eb",
          darkBeige: "#7c7c6f",
        },
      },
    },
  },
  plugins: [],
};

export default config;
