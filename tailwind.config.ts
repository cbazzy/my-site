import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
