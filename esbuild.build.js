const esbuild = require('esbuild');
const { globPlugin } = require('esbuild-plugin-glob');

const packagejson = require('./package.json');

const sharedConfig = {
  loader: {
    '.tsx': 'tsx',
    '.ts': 'tsx',
  },
  outbase: './src',
  bundle: true,
  minify: true,
  jsxFactory: 'createElement',
  jsxFragment: 'Fragment',
  target: ['esnext'],
  logLevel: 'debug',
  external: [...Object.keys(packagejson.peerDependencies || {})],
};

const buildConfig = {
  ...sharedConfig,
  minify: true,
};

esbuild
  .build({
    ...buildConfig,
    entryPoints: ['src/index.ts'],
    outdir: 'dist/cjs',
    format: 'cjs',
    banner: {
      js: "const { createElement, Fragment } = require('react');\n",
    },
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...buildConfig,
    entryPoints: [
      'src/index.ts',
      'src/components/**/index.tsx',
      'src/lib/stitches.config.ts',
      'src/lib/globalStyles.ts',
    ],
    outdir: 'dist/esm',
    splitting: true,
    format: 'esm',
    banner: {
      js: "import { createElement, Fragment } from 'react';\n",
    },
    plugins: [globPlugin()],
  })
  .catch(() => process.exit(1));
