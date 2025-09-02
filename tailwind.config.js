/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
