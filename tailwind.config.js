/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        primary: 'var(--primary)',
        'primary-dim': 'var(--primary-dim)',
        foreground: 'var(--foreground)',
        'muted-foreground': 'var(--muted-foreground)',
        background: 'var(--background)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
