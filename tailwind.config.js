/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors - accessible as bg-primary, bg-secondary, bg-tertiary
        primary: '#ffffff',
        secondary: '#f9fafb',
        tertiary: '#f3f4f6',
        // Brand primary colors - accessible as bg-primary-50, text-primary-500, etc.
        'primary-50': '#f0f9f4',
        'primary-100': '#dcf3e4',
        'primary-500': '#10b981',
        'primary-600': '#059669',
        'primary-900': '#064e3b',
        // Brand secondary colors
        'secondary-50': '#fef3c7',
        'secondary-500': '#f59e0b',
        'secondary-600': '#d97706',
        // Status colors
        'success-50': '#d1fae5',
        'success-500': '#10b981',
        'warning-50': '#fef3c7',
        'warning-500': '#f59e0b',
        'error-50': '#fee2e2',
        'error-500': '#ef4444',
        'info-50': '#dbeafe',
        'info-500': '#3b82f6',
        // Text colors - accessible as text-text-primary, text-text-secondary, etc.
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
        'text-tertiary': '#9ca3af',
        'text-inverse': '#ffffff',
        // Border colors - accessible as border-border-light, border-border-default, etc.
        'border-light': '#e5e7eb',
        'border-default': '#d1d5db',
        'border-strong': '#9ca3af',
        // Accent colors
        'accent-green': '#10b981',
        'accent-blue': '#3b82f6',
        'accent-brown': '#92400e',
        'accent-amber': '#f59e0b',
        // Interactive states
        'focus-ring': '#10b981',
        'hover-overlay': 'rgba(0, 0, 0, 0.05)',
        'disabled-bg': '#f3f4f6',
        'disabled-text': '#d1d5db',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        // Text color utilities
        '.text-primary': { color: theme('colors.text-primary') },
        '.text-secondary': { color: theme('colors.text-secondary') },
        '.text-tertiary': { color: theme('colors.text-tertiary') },
        '.text-inverse': { color: theme('colors.text-inverse') },
        // Border color utilities
        '.border-light': { 'border-color': theme('colors.border-light') },
        '.border-default': { 'border-color': theme('colors.border-default') },
        '.border-strong': { 'border-color': theme('colors.border-strong') },
      });
    },
  ],
};
