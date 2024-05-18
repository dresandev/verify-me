import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface": "var(--surface)",
        "text": "var(--text)",
        "primary": "var(--primary)",
        "stroke": "var(--stroke)",
      },
    },
  },
  plugins: [],
};

export default config;
