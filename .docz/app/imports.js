export const imports = {
  'TODO.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "todo" */ 'TODO.md'),
  'src/js/docs/SearchForm.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-js-docs-search-form" */ 'src/js/docs/SearchForm.mdx'
    ),
}
