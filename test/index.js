
/* IMPORT */

import {describe} from 'ava-spec';
import {default as noop} from '../dist';

/* NOOP TAG */

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
