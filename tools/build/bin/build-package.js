#! /usr/bin/env node
// Use this bin to build packages that are dependencies of `@az-tools/cli`
// and therefore can't use `lg build-package`
const { buildPackage } = require('../dist/umd/index.js');
buildPackage({ direct: true });
