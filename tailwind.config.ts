import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)', 
        serif: 'var(--font-serif)',
      },
      colors: {
    emeraldGlow: "rgba(16, 185, 129, 0.6)", // transparent green glow
  },
    backgroundImage: {
    'emerald-rings': "url('/emerald-rings.png')", // put your emerald concentric rings asset here
  },
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite",
        'move-left': 'move-left 30s linear infinite',
        'move-right': 'move-right 15s linear infinite'
      }, 
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0'
          }
        },
         'star-twinkle': {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.4' },
    },
        'move-left': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        },
        'move-right': {
          '0%': {
            transform: 'translateX(-50%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        }
      }
    },
  },
  plugins: [],
};

export default config;