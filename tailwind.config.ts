
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        // CS2 rarity colors - яркие геймерские оттенки
        cs: {
          blue: "#4b69ff",
          purple: "#8847ff",
          pink: "#d32ce6",
          red: "#eb4b4b",
          gold: "#e4ae39",
          gray: "#252836",
          darkgray: "#1F1D2B",
          neon: {
            blue: "#00FFFF",
            green: "#39FF14",
            pink: "#FF00FF",
            yellow: "#FFFF00",
            orange: "#FF7700",
          },
          gamer: {
            dark: "#0F0F1B",
            accent: "#FF2D55",
            secondary: "#171629",
            highlight: "#2D3250",
            glow: "#4B53FF"
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px 5px rgba(75, 83, 255, 0.5)" },
          "50%": { boxShadow: "0 0 20px 10px rgba(75, 83, 255, 0.8)" },
        },
        "shine": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "neon-flicker": {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { 
            textShadow: "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #4B53FF, 0 0 82px #4B53FF, 0 0 92px #4B53FF, 0 0 102px #4B53FF, 0 0 151px #4B53FF"
          },
          "20%, 24%, 55%": { textShadow: "none" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shine": "shine 3s linear infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "neon-flicker": "neon-flicker 2.5s infinite alternate",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(75, 83, 255, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(75, 83, 255, 0.15) 1px, transparent 1px)',
        'gamer-gradient': 'linear-gradient(135deg, #0F0F1B 0%, #171629 100%)'
      },
      boxShadow: {
        'neon-blue': '0 0 5px #4B53FF, 0 0 10px #4B53FF, 0 0 15px #4B53FF',
        'neon-pink': '0 0 5px #FF2D55, 0 0 10px #FF2D55, 0 0 15px #FF2D55',
        'item-glow': '0 0 15px 5px rgba(75, 105, 255, 0.6)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
