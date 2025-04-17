#!/bin/sh

alias run="pnpm run"

rm -rf dist

run build:components
run build:themes
run build:types

# rm -rf dist/components dist/vite.config.d.ts dist/vite.config.d.ts.map
