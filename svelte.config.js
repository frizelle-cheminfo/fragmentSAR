import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
  kit: {
    // Use the Vercel adapter so Vercel auto‑detects & builds your app
    adapter: adapter(),
    prerender: {
      // prerender any non‑dynamic routes (home, about, etc.)
      default: true
    }
  }
};
