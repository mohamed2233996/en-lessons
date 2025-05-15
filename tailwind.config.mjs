/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        hprimary: "var(--hprimary-color)",
        dark: "var(--dark-color)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};
