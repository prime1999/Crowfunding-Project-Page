/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "headerMobile-bg":
          "url('/src/Components/images/image-hero-mobile.jpg')",
        "headerDesktop-bg":
          "url('/src/Components/images/image-hero-desktop.jpg')",
      },
      colors: {
        Black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 48%)",
        moderateCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
        lightGray: "hsl(0, 6%, 87%)",
      },
    },
  },
  plugins: [],
};
