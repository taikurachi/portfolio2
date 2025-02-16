/** @type {import('tailwindcss').Config} */
export default {
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
          purple: "#EEE0FF",
          blue: "#C2EAF3",
          pink: "#f15bb5",
          salmon: "#FFC0BA",
          green: "#B3E8CA",
          beige: "#f9f8eb",
          darkBeige: "#7c7c6f",
        },
      },
    },
  },
  plugins: [],
};
