import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        RedP: "#E12454" ,
        BlueP: "#011E45",
        BlueS: "#1A6FE1",


      },
    },
  },
  plugins: [],
} satisfies Config;
