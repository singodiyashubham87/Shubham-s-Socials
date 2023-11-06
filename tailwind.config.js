/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--body-bg)',
        'bg-secondary': 'var(--box-bg)',
        'box-shadow': 'var(--box-shadow)',
        'box-border': 'var(--box-border)',
        'text-muted': 'var(--font-muted)',
        'social-icons': 'var(--social-media-icons)',
        'professional-icons': 'var(--professional-media-icons)',
        'theme-circle': 'var(--theme-circle)',
        'text-selection': 'var(--text-selection)',
      },
      fontFamily: {
        inter: `"Inter","sans-serif"`,
      },
      screens: {
        'xxl': '1751px',
        'mmd': '851px',
        'gsm': '571px',
        'msm': '491px',
        'vsm': '406px',
        'vvsm': '100px',
      },
    }
  },
  plugins: [],
}