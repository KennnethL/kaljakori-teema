# Kaljakori-teema

Ghost theme for kaljakori.fi

## Build

`yarn install`

"Fix" Bootstrap + Babelify

https://github.com/bnf/bootstrap/commit/f4b135d18fdfc1b488d58be99e45c343e780fe6f

Add this to `node_modules/bootstrap/package.json`

```
"browserify": {
  "transform": [
    "babelify"
  ]
}
```

Build: `yarn run build`
