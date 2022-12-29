/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
 module.exports = {
  content: [

    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{ts,tsx, jsx,js}",
    "./screens/**/*.{ts,tsx, jsx,js}",
    "./components/**/*.{ts,tsx, jsx,js}",
    "./public/**/*.html",
    "./utils/**/*.{ts,tsx, jsx,js}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend:{
      fontFamily:{
        'bodyFont':['Roboto']
      },
      colors:{
        'color1':'#00ADB5'
      },
      padding: {
        yt: '56.25%'
      },
    }
  },
};