import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#72CFFF",
        secondary: "#0D1419",
        dashboardBlue: "#13262F",
        smallTextGray: "#586369",
        sideTabGray: "#999C9E",
        topbarLightGray: "#667881",
        topbarlightblue: "#193D4E",
        greywhite: "#ECEEEE",
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
      backgroundImage: {
        widget_border: "linear-gradient(to bottom, blue, #72CFFF)",
      },
    },
  },
  plugins: [],
} satisfies Config;
