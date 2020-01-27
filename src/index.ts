
/* NOOP */

function noop () {

  const args = arguments,
        strings = args[0],
        lastIndex = strings.length - 1;

  if ( !lastIndex ) return strings[0];

  let acc = '',
      part;

  for ( let i = 0; i < lastIndex; i++ ) {

    part = strings[i];

    if ( part ) acc += part;

    acc += args[i + 1];

  }

  part = strings[lastIndex];

  return part ? acc += part : acc;

}

/* EXPORT */

export default noop;
