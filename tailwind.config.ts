import type { Config } from "tailwindcss";

export default {
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
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        background: {
          DEFAULT: 'hsl(160 45% 7%)',
          foreground: 'hsl(60 9% 96%)'
        },
        foreground: {
          DEFAULT: 'hsl(60 9% 96%)',
        },
        primary: {
          DEFAULT: 'hsl(158 64% 52%)',
          foreground: 'hsl(160 60% 8%)'
        },
        secondary: {
          DEFAULT: 'hsl(162 40% 14%)',
          foreground: 'hsl(60 9% 96%)'
        },
        muted: {
          DEFAULT: 'hsl(162 30% 14%)',
          foreground: 'hsl(160 15% 70%)'
        },
        accent: {
          DEFAULT: 'hsl(158 64% 52%)',
          foreground: 'hsl(160 60% 8%)'
        },
        border: 'hsl(162 30% 18%)',
        input: 'hsl(162 30% 18%)',
        ring: 'hsl(158 64% 52%)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-5px)'
          }
        },
        'pulse-light': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,20px) scale(0.95)' }
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-light': 'pulse-light 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'blob': 'blob 12s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
