import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    retry: process.env.CI ? 4 : 0,
  },
});
