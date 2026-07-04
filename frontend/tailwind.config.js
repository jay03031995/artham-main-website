/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    "text-armadillo/85",
    "text-armadillo/80",
    "text-armadillo/70",
    "text-armadillo/60",
    "text-arabian/85",
    "text-arabian/80",
    "text-arabian/70",
    "text-arabian/60",
    "border-armadillo/20",
    "border-armadillo/30",
    "border-arabian/20",
    "border-arabian/30",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        burma: {
          DEFAULT: '#844d28',
          50: '#f5eee6',
          100: '#e2c8ad',
          500: '#844d28',
          600: '#6d3f20',
          700: '#5a331a',
        },
        armadillo: {
          DEFAULT: '#483f37',
          50: '#e8e4de',
          100: '#c9c0b5',
          500: '#483f37',
          600: '#3a332d',
        },
        arabian: {
          DEFAULT: '#efdfc8',
          50: '#faf3e6',
          100: '#efdfc8',
          200: '#e7d1b3',
        },
        gold: {
          DEFAULT: '#b8894a',
          400: '#c99a5b',
          500: '#b8894a',
          600: '#9a7239',
        },
        ink: '#1a1512',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        devanagari: ['"Tiro Devanagari Hindi"', 'serif'],
        headline: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
        fine: ['Raleway', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};