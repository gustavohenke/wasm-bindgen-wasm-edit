# wasm-bindgen + wasm-edit reproduction repo

## Setup

Make sure you have Rust + Cargo installed.

Using rustup is a straightforward way of doing so:
https://rust-lang.github.io/rustup/installation/index.html

Make sure you have the `wasm32-unknown-unknown` target added:

```
$ rustup target add wasm32-unknown-unknown
```

Finally, install wasm-bindgen CLI:

```
$ cargo install wasm-bindgen-cli
```

## Testing

First build to WASM:

```
$ npm run wasm
```

This should output a directory called `target`.

Then try running some of these commands combinations to test the output:

`$ npm run bg`
- `node edit.js`: throws `Invalid UTF-8 encoding`
- `node edit.js ast`: success

`$ npm run bg -- --remove-name-section`
- `node edit.js`: throws `integer too large`
- `node edit.js ast`: success

`npm run bg -- --remove-producers-section`
- `node edit.js`: throws `Invalid UTF-8 encoding`
- `node edit.js ast`: success

`npm run bg -- --remove-name-section --remove-producers-section`
- `node edit.js`: success
- `node edit.js ast`: success
