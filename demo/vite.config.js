import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-offline-detect/',
  plugins: [react()],
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), '..'],
    },
  },
});
