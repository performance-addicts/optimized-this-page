# optimized-this-page

https://optimized-this-page.netlify.app/

Further opportunities
Minify HTML, CSS, JS
Caching
Brotli
Priority Hints
Preloading
Self Hosting Fonts/Images

## Fixes

#### FCP, LCP

- cdn.com script tag was render blocking and unnecessary
- preconnect to critical domains
- inline css
- removed LCP image lazy loading
- optimize images
- reorder scripts

#### CLS

- image width and height
- preload font to avoid flicker

#### TBT

- refactor js to reduce long tasks
- condense files
- identify which files are causing issues


The libraries added are needed for functionality in the future so they shouldn't removed.

Use WebpageTest and/or Dev Tools.

Make one recommendation minimum for each metric (LCP, CLS, TBT) if necessary.

