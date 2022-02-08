---
title: Using TypeScript with 11ty
tagline: Type safety for the win
tags: ['typescript', '11ty', 'tooling', 'javascript', 'eleventy']
excerpt: Making use of everyone's favourite JavaScript subset.. with 11ty! A quick quide to setting up your tooling.
thumbImage: 11ty-thumbnail.jpg
publish: true
date: 2022-02-03
article: true
layout: article.11ty.js
---

TypeScript has never been more popular than it is now in 2022. Going through a seemingly endless spike in popularity, more and more projects are relying on the benefits of type safety that it provides. 

<!-- <figure>
  <picture>
    <source media="(min-width: 64em)" srcset="https://res.cloudinary.com/jahill/image/upload/v1644337612/articles/typescript-banner_wo31g0.jpg" />
    <source media="(min-width: 0)" srcset="https://res.cloudinary.com/jahill/image/upload/f_auto,fl_strip_profile,w_480,h_220,c_fill/v1644337612/articles/typescript-banner_wo31g0.jpg" />
    <img src="https://res.cloudinary.com/jahill/image/upload/f_auto,fl_strip_profile,w_480,h_220,c_fill/v1644337612/articles/typescript-banner_wo31g0.jpg">
  </picture>
</figure> -->

One project that, at time of writing, doesn't provide a clear method of integration however, is 11ty. This is likely by design; 11ty's goal is to be a bare metal static site generator, where you bring your own.. everything. Aside from template syntax, or generating the HTML, everything else is handled by plugins or developer integration.

This makes 11ty an excellent choice for those who like to, or are able to, dig deep into their tech stack to optimise and cater for requirements specific to their use case.

Like many other things, applying TypeScript to your 11ty project is fairly simple, and just requires an extra build step in your tooling. As 11ty only supports JavaScript natively, we need to take your TypeScript source and compile it, ready for the static site generator.

## Packing the web, with Webpack

The first step for us is to introduce a pre-build step for our souce files. I'm going to use Webpack for this, but other bundlers will work just as well. The primary goal is to take a source directory of TypeScript, and output the JavaScript into a directory being watched by 11ty. When run with `--watch`, 11ty will instantly recognise these changed files, and rebuild.

Install the bare minumum of dependencies required:

```
$ yarn add --dev typescript glob webpack webpack-cli ts-loader
```

With that finished, we need to create our Webpack config. The following is a very basic, highly contrived example. It assumes a directory structure, but can easily be modified depending on your project:

```js
const glob = require('glob');

/*[...]*/

module.exports = {
  entry: glob.sync(`${__dirname}/src/**/*.11ty.ts*`).reduce((result, file) => {
    let [name] = file.split('src/').slice(-1);

    result[name.replace(/\.tsx?$/g, '')] = file;

    return result;
  }), {}),
  output: {
    path: path.join(__dirname, '/src/_js'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  context: path.join(__dirname, '/src/'),
  cache: true,
  target: 'node',
  externals: fs.readdirSync('node_modules'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ]
  }
};
```

The first thing to mention in the above config, is how we're aquiring our Webpack entry points. We're using the `glob` package to trawl through our `./src` directory, and return paths to all files that contain an `.11ty.ts*` suffix (the globbed extension, `.ts*`, allows us to use TSX if needed).

Now we just need to add a build script to our `package.json` file, something like this:

```json
{
 /*[...]*/
 "scripts": {
   "watch:pages": "webpack --watch"
 }
}
```

When we run the above, you'll see a new directory generated with all of our built JavaScript files, `./src/_js`. This is where we'll tell 11ty to watch for changed files. Given the files in here are ephemeral, it's wise to add a `.gitignore` record to avoid commiting it to source control.

## Building our 11ty pages

Now that we have our JavaScript files all ready, we need to update our 11ty config to focus on this intermediate directory. This is pretty simple, something like this:

```typescript
module.exports = function (config) {
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src/_js', // <-- This bit
      output: 'dist',
      layouts: 'layouts',
      includes: '_includes',
    },
  };
};
```

Now that we've got 11ty looking in the right place, we add another script to our `package.json`:

```diff-json
{
 /*[...]*/
 "scripts": {
   "watch:pages": "webpack --watch",
+  "watch:11ty": "eleventy --serve --quiet --watch"
 }
}
```

Aside from any bells and whistles you might like / need, that's pretty much it! The trick is to run Webpack *before* 11ty, ensuring that by the time 11ty is run, we have all of the source files ready to run through the build.

Personally, I use <a href="https://www.npmjs.com/package/npm-run-all" target="_blank" rel="noopener">npm-run-all</a> to orchestrate this build order. Once installed, we can update our `package.json`:

```diff-json
{
 /*[...]*/
 "scripts": {
+  "start": "npm-run-all pages -p watch:*",
+  "pages": "webpack",
   "watch:pages": "webpack --watch",
   "watch:11ty": "eleventy --serve --quiet --watch"
 }
}
```

## Finishing up

The above is meant as a rough guide, mileage may vary. It's likely you'll need to tweak the above to work properly with your file structure, project and needs. If you need a working example for reference, check out my 11ty starter:

<a href="https://github.com/jhukdev/11tyby" target="_blank" rel="noopener">https://github.com/jhukdev/11tyby</a>

It takes all of the above, and more. Providing out of the box Preact / JSX support, SCSS, and other useful things.

Good luck!

