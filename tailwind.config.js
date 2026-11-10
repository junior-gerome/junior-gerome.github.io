/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'selector',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        sx: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        surface: {
          light: "#fafafa",
          card: "#ffffff",
          dark: "#090d16",
          darkCard: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Figtree", "system-ui", "sans-serif"],
        heading: ["Sora", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },

      animation: {
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
