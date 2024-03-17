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
        bg: {
          color: "#E8E8E8"
        },
        controls: {
          color: "#D4D4D4",
        }
      },
      gridTemplateColumns: {
        'product': '1.2fr 2fr 1fr',
      },
      fontSize: {
        'clamp-14-24': 'clamp(14px, 4vw, 24px)',
        'clamp-16-24': 'clamp(16px, 4vw, 24px)',
        'clamp-16-36': 'clamp(16px, 4vw, 36px)',
        'clamp-18-36': 'clamp(18px, 4vw, 36px)',
        'clamp-32-64': 'clamp(32px, 4vw, 64px)',
      },
    },
  },
  plugins: [],
};
export default config;
