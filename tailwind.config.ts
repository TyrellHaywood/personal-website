import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'ibm-plex-serif': ['"IBM Plex Serif"', 'serif'],
        'source-sans': ['"Source Sans 3"', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
      }
    },
  },
  plugins: [],
};
export default config;
