/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "768px",
        },
      },
      fontFamily: {
        "noto-sans": "var(--font-noto-sans)",
        inter: "var(--font-inter)",
      },
      colors: {
        foreground: "var(--foreground-color)",
        accent: "var(--accent-color)",
        white: "var(--white-color)",
        background: "var(--background-color)",
      },
    },
  },
  plugins: [],
};
