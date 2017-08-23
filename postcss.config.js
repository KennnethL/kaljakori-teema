module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import')({
      root: ctx.file.dirname
    }),
    require('cssnano')({
      preset: 'default'
    })
  ]
});
