/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "#A729F5",
        darkNavy: "#313E51",
        navy: "#3B4D66",
        greyNavy: "#626C7F",
        lightBluish: "#ABC1E1",
        lightGrey: "#F4F6FA",
        green: "#26D782",
        red: "#EE5454",
        btnHover: "#D394FA",
      },
      backgroundImage: {
        backgroundDesktopDark: "url('/pattern-background-desktop-dark.svg')",
        backgroundDesktopLight: "url('/pattern-background-desktop-light.svg')",
        backgroundMobileDark: "url('/pattern-background-mobile-dark.svg')",
        backgroundMobileLight: "url('/pattern-background-mobile-light.svg')",
        backgroundTabletDark: "url('/pattern-background-tablet-dark.svg')",
        backgroundTabletLight: "url('/pattern-background-tablet-light.svg')",
      },
    },
  },
  plugins: [],
};
