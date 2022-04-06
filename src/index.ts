
/* MAIN */

const noop = ( strings: TemplateStringsArray, ...expressions: unknown[] ): string => {

  let result = strings[0];

  for ( let i = 1, l = strings.length; i < l; i++ ) {

    result += expressions[i - 1];
    result += strings[i];

  }

  return result;

};

/* EXPORT */

export default noop;
