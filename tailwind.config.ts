import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        black: "0 0 6px rgba(100, 100, 100, 0.1)",
        white: "0 0 6px rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        none: "0",
        blur: "blur(2px)",
        "blur-lg": "blur(4px)",
        "blur-xl": "blur(8px)",
        "blur-2xl": "blur(12px)",
        "blur-3xl": "blur(16px)",
      },
    },
    screens: {
      desktop: "1024px",
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
export default config;
