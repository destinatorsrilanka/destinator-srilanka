import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  // Shadcn UI සඳහා content paths
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-red": "#9b111e",
        "destinator-orange": "#F58220",
        "destinator-black": "#0A0A0A",
        "destinator-gray": "#1A1A1A",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "full-rounded": "100px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        showContent: {
          "0%": {
            transform: "translateY(50px)",
            filter: "blur(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        showImage: {
          to: {
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100%",
            borderRadius: "0",
          },
        },
        showThumbnail: {
          from: {
            width: "0",
            opacity: "0",
          },
        },
        effectNext: {
          from: {
            transform: "translateX(150px)",
          },
        },
        runningTime: {
          from: {
            width: "100%",
          },
          to: {
            width: "0",
          },
        },
        outFrame: {
          to: {
            width: "150px",
            height: "150px",
            bottom: "50px",
            left: "50%",
            borderRadius: "20px",
            filter: "none",
          },
        },
        contentOut: {
          to: {
            transform: "translateY(-150px)",
            filter: "blur(20px)",
            opacity: "0",
          },
        },
        "show-data": {
          "50%": {
            transform: "translateY(-10rem)",
          },
          "100%": {
            transform: "translateY(-7rem)",
          },
        },
        "remove-overflow": {
          to: {
            overflow: "initial",
          },
        },
        "remove-data": {
          "0%": {
            transform: "translateY(-7rem)",
          },
          "50%": {
            transform: "translateY(-10rem)",
          },
          "100%": {
            transform: "translateY(0.5rem)",
          },
        },
        "show-overflow": {
          "0%": {
            overflow: "initial",
            pointerEvents: "none",
          },
          "50%": {
            overflow: "hidden",
          },
        },
        "scroll-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-220px * 20))",
          },
        },
        pulse: {
          "100%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(2.5)",
          },
        },
      },
      animation: {
        showContent: "showContent 0.5s 1s linear 1 forwards",
        showImage: "showImage 0.5s linear 1 forwards",
        showThumbnail: "showThumbnail 0.5s linear 1 forwards",
        effectNext: "effectNext 0.5s linear 1 forwards",
        runningTime: "runningTime 3s linear 1 forwards",
        outFrame: "outFrame 0.5s linear 1 forwards",
        contentOut: "contentOut 1.5s linear 1 forwards",
        "show-data": "show-data 1s forwards",
        "remove-overflow": "remove-overflow 2s forwards",
        "remove-data": "remove-data 1s forwards",
        "show-overflow": "show-overflow 2s forwards",
        "scroll-left": "scroll-left 20s linear infinite",
        "scroll-left-long": "scroll-left 65s linear infinite",
        pulse: "pulse 1.3s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
