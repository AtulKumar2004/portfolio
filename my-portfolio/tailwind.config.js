/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          elevated: '#141414',
          card: '#161616',
          subtle: '#1F1F1F',
          hover: '#262626',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A3A3A3',
          muted: '#737373',
          dark: '#525252',
        },
        border: {
          subtle: '#262626',
          light: '#333333',
          muted: '#1E1E1E',
        },
        accent: {
          DEFAULT: '#A3E635', // Muted lime green
          hover: '#BEF264',
          dim: 'rgba(163, 230, 53, 0.10)',
          glow: 'rgba(163, 230, 53, 0.25)',
          border: 'rgba(163, 230, 53, 0.35)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'elevated': '0 8px 30px -8px rgba(0, 0, 0, 0.7)',
        'accent-glow': '0 0 25px -5px rgba(163, 230, 53, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
