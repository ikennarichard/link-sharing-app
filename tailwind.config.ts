import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': 'var(--dark-grey)',
        'nickel': 'var(--grey)',
        'han-purple': 'var(--purple)',
        'light-silver': 'var(--light-silver)',
      }
    },
  },
  plugins: [],
};
export default config;
