/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    colors: {
      primaryGreen: "#94B49F",
      secondaryGreen: "#CEE5D0",
      primaryYellow: "#FCF8E8",
      primaryOrange: "#ECB390",
    },
    extend: {
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80')",
      },
    },
  },
  plugins: [],
};
