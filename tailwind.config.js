/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: ({ colors }) => ({
      primary: "#FFFFFF",
      "button-text": "#F1F3FF",
      heading: "#111111",
      card: "#F1F3FF",
      date: "#591BFF",
      "scanner-border": "rgba(59, 71, 240, 0.1)",
    }),

    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    extend: {
      backgroundImage: {
        "header-texture": "url('/src/assets/navigation.png')",
        "banner-image": "url('/src/assets/Rectangle 8.png')",
        "card-subtract": "url('/src/assets/Subtract .png')",
        "footer-texture": "url('/src/assets/Rectangle 28.png')",
        "payment-button-gradient":
          "linear-gradient(to left, #7342F9 67%, #8053FA 100%)",
        "event-gradient": "linear-gradient(to left, #7342F9, #8053FA )",
        "event-border-gradient":
          "linear-gradient(to left, #7342F9 11.4%, #8053FA 20%)",
      },
    },
  },
  plugins: [],
};
