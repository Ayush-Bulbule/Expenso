/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'poppins-regular': ['poppins-regular'],
        'poppins-medium': ['poppins-medium'],
        'poppins-bold': ['poppins-bold'],
        'poppins-thin': ['poppins-thin'],
        'poppins-light': ['poppins-light'],
      },
    },
  },
  plugins: [],
}