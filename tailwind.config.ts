import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#CBA35C",
        hoverGreen: "#3E7B27",
      },
      keyframes: {
        zoomOut: {
          "0%": { transform: "scale(2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        zoomOut: "zoomOut 2s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
