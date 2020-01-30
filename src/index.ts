
/* NOOP */

function noop ( strings: TemplateStringsArray, ...exp: any[] ): string {

  const lastIndex = strings.length - 1;

  if ( !lastIndex ) return strings[0];

  let acc = '',
      part;

  for ( let i = 0; i < lastIndex; i++ ) {

    part = strings[i];

    if ( part ) acc += part;

    acc += exp[i];

  }

  part = strings[lastIndex];

  return part ? acc += part : acc;

}

/* EXPORT */

export default noop;
