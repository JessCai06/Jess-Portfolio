import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use root base on Vercel, GitHub Pages path otherwise
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  base: isVercel ? '/' : '/Jess-Portfolio/',
  plugins: [react()],
});
