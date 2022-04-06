
/* IMPORT */

import {describe} from 'fava';
import noop from '../dist/index.js';

/* MAIN */

describe ( 'Noop Tag', it => {

  it ( 'works', t => {

    const tests = [
      [noop``, ''],
      [noop`\``, '`'],
      [noop`1`, '1'],
      [noop`${1}${2}${3}`, '123'],
      [noop`${1}2${3}`, '123'],
      [noop`1${2}${3}4`, '1234']
    ];

    tests.forEach ( ([ result, expected ]) => {

      t.is ( result, expected );

    });

  });

});
