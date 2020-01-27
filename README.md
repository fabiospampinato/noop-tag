# Noop Tag

A noop template literal tag, useful for syntax highlighting hints.

This package is basically a clone of [fake-tag](https://github.com/jaydenseric/fake-tag), but about 2\~4x faster, it is still 5\~10x slower than untagged template literals though, so you might want to use comment tags instead.

This overhead could be removed entirely via a babel transform that removes these noop tags from template literals, do you want to code it?

## Install

```sh
npm install --save noop-tag
```

## Usage

``````ts
import css from 'noop-tag';
import javascript from 'noop-tag';
import html from 'noop-tag';

const x = css```
  .foo {
    color: red;
  }
```;

const y = javascript```
  function () {
    return 123;
  }
```;

const z = html```
  <div>
    <b>Bold</b>
  </div>
```;
``````

## License

MIT © Fabio Spampinato
