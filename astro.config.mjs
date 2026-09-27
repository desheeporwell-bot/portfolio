// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE and BASE via env at build time so the same config works for
// a user site (username.github.io) or a project site (username.github.io/repo).
const site = process.env.SITE ?? 'https://example.github.io';
const base = process.env.BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
});
