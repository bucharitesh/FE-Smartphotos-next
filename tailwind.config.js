/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand_gray_1: '#F9FAFB',
        brand_gray_2: '#6B7280',
        brand_gray_3: '#686D77',
        brand_gray_4: '#374151',
        brand_gray_5: '#D1D5DB',
        brand_gray_6: '#4B5563',
        brand_blue_1: '#1D4ED8',
        brand_blue_2: '#181E4B',
        brand_blue_3: '#8B5CF6',
        brand_blue_4: '#60A5FA',
        brand_blue_5: '#2563EB',
        brand_yellow_1: '#F59E0B',
        brand_pink_1: '#EC4899',
        brand_white: '#FFFFFF',
        brand_black: '#111827',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        gilroy: ['var(--font-gilroy)'],
      },
    },
  },
  plugins: [],
};
