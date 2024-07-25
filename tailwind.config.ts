import type { Config } from 'tailwindcss'

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
      'light-grey': 'var(--light-grey)',
      'light-purple': 'var(--light-purple)',
      'coral-red': 'var(--coral-red)',
      'hover-purple': 'rgba(190, 173, 255, 1)'
      },
      boxShadow: {
        'light': '0 0 32px 0 rgba(99, 60, 255, 0.25)'
      }
    },
  },
  plugins: [],
}
export default config;