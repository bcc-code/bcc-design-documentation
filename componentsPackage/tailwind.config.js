/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./docs/**/*.{js,ts,vue,md}","./src/**/*.{js,ts,vue}","./node_modules/flowbite/**/*.js","./node_modules/vuepress-theme-bcc-common-components/**/*.{js,ts,vue,md}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827"
        },
        darkGreen: {
          50: "#739e9a",
          100: "#43867f",
          200: "#206c65",
          300: "#005e57",
          400: "#00564f",
          500: "#004e48",
          600: "#004641",
          700: "#003f3a",
          800: "#003934",
          900: "#00332f"
        },
        error: {
          100: "#ffeee9",
          200: "#d66556",
          300: "#d3594a",
          400: "#b43929",
          500: "#390000"
        },
        success: {
          100: "#e5f5ef",
          200: "#79c6a6",
          300: "#60b391",
          400: "#419474",
          500: "#004e48"
        },
        warning: {
          100: "#fff3da",
          200: "#f5be52",
          300: "#f4ae3d",
          400: "#d49633",
          500: "#6e5404"
        },
        black: {
          100: "#0e0e0e"
        },
        white: {
          100: "#ffffff"
        },
        isbre: {
          100: "#f4f7f7",
          200: "#e6ecec",
          300: "#ccd7d8"
        }
      }
    },
  },
}