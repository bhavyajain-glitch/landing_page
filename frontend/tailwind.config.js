/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050505', // Deep black/grey
          purple: '#8b5cf6', // Base purple
          neon: '#ccff00', // Acid green
          metallic: '#e2e8f0', // Silver/Chrome
        }
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 50%, #e2e8f0 100%)',
        'purple-glow': 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(0,0,0,0) 70%)',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'star-spin': 'spin 4s linear infinite',
      },
      boxShadow: {
        'neon': '0 0 10px #ccff00, 0 0 20px #ccff00',
        'purple': '0 0 20px rgba(139, 92, 246, 0.5)',
      }
    },
  },
  plugins: [],
}
