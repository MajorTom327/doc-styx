/** @type {import('tailwindcss').Config} */

const lightTheme = {
  primary: "#294db2",
  secondary: "#92a8db",
  accent: "#283f8c",
  neutral: "#301f38",
  "base-100": "#f0eff0",
  info: "#3db1d1",
  success: "#3cdd94",
  warning: "#e8af2c",
  error: "#f47177",
};

const darkTheme = {
  primary: "#661AE6",
  secondary: "#D926AA",
  accent: "#1FB2A5",
  neutral: "#FFFFFF",
  "base-100": "#2A303C",
  info: "#3ABFF8",
  success: "#36D399",
  warning: "#FBBD23",
  error: "#F87272",
  ...lightTheme,
};

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [{ light: lightTheme, dark: darkTheme }],
  },

  plugins: [require("daisyui")],
};
