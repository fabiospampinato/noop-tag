
/* IMPORT */

import benchmark from 'benchloop';
import noop from '../dist/index.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 500_000
});

benchmark ({
  name: 'noop-tag',
  fn: () => {
    noop``
    noop`\``
    noop`1`
    noop`${1}${2}${3}`
    noop`${1}2${3}`
    noop`1${2}${3}4`
  }
});
