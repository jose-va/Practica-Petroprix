import type { Config } from "tailwindcss";

const config: Config = {
  important: true, 
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
