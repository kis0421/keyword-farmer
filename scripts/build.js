import { build } from 'esbuild';

async function bundleESM() {
  await build({
    entryPoints: ['./src/index.ts'],
    outdir: './dist/esm',
    format: 'esm',
    bundle: true,
    platform: 'node',
    target: ['node18'],
    minify: true
  });
}

async function main() {
  await bundleESM();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
