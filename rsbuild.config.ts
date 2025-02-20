import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federation_docs_provider',
      exposes: {
        './docs': './src/docs.tsx',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  server: {
    port: process.env.PORT || 3001,
  },
});
