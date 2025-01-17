# Noop Tag

A noop template literal tag, useful for syntax highlighting hints.

This package is basically a clone of [fake-tag](https://github.com/jaydenseric/fake-tag), but about 2\~4x faster, it is still 5\~10x slower than untagged template literals though, so you might want to use comment tags instead.

## Install

```sh
npm install noop-tag
```

## Usage

```ts
import css from 'noop-tag';
import javascript from 'noop-tag';
import html from 'noop-tag';

// Some example usages

const x = css`
  .foo {
    color: red;
  }
`;

const y = javascript`
  function () {
    return 123;
  }
`;

const z = html`
  <div>
    <b>Bold</b>
  </div>
`;
```

## License

MIT © Fabio Spampinato
