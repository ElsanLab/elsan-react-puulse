#!/bin/sh

alias run="pnpm run"

rm -rf dist

run build:types
run build:components
run build:themes:pro
run build:themes:public

rm -rf dist/components dist/vite.config.d.ts dist/vite.config.d.ts.map
