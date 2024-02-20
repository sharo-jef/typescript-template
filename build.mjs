import { build } from 'esbuild';

// Build
await build({
  entryPoints: ['src/index.ts'],
  platform: 'node',
  outdir: './dist/',
  bundle: true,
  target: 'es2020',
});

// Build server
// await build({
//   entryPoints: ['src/server.ts'],
//   platform: 'node',
//   outdir: './dist/',
//   bundle: true,
//   target: 'es2020',
// });

// Build batch
// await build({
//   entryPoints: ['src/batch.ts'],
//   platform: 'node',
//   outdir: './dist/',
//   bundle: true,
//   target: 'es2020',
// });
