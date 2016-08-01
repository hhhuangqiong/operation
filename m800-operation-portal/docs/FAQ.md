# FAQ

### Where are the files being served from when I run `npm start`?
Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is /src, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to /dist and the app is served from /dist.

### How is Sass being converted into CSS and landing in the browser?
Magic! Okay, more specifically, we're handling it differently in dev (`npm start`) vs prod (`npm run build`)

When you run `npm start`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into bundle.js. Sounds odd, but it works!
 3. bundle.js contains code that loads styles into the &lt;head&gt; of index.html via JavaScript. This is why you don't see a stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into styles.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

For both of the above methods, a separate sourcemap is generated for debugging Sass in [compatible browsers](http://thesassway.com/intermediate/using-source-maps-with-sass).

### How do I deploy this?
`npm run build`. This will build the project for production. It does the following:
* Minifies all JS
* Sets NODE_ENV to prod so that React is built in production mode
* Places the resulting built project files into /dist. (This is the folder you'll expose to the world).

### How do I debug?
Since browsers don't currently support ES6, we're using Babel to compile our ES6 down to ES5. This means the code that runs in the browser looks different than what we wrote. But good news, a [sourcemap](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) is generated to enable easy debugging. This means your original JS source will be displayed in your browser's dev console.
*Note:* When you run `npm start`, no JS is minified. Why? Because minifying slows the build. So JS is only minified when you run the `npm run build` script. See [more on building for production below](https://github.com/coryhouse/react-slingshot#how-do-i-deploy-this).

Also note that no actual physical files are written to the filesystem during the dev build. **For performance, all files exist in memory when served from the webpack server.**. Physical files are only written when you run `npm run build`.

**Tips for debugging via sourcemaps:**

 1. Browsers vary in the way they allow you to view the original source. Chrome automatically shows the original source if a sourcemap is available. Safari, in contrast, will display the minified source and you'll [have to cmd+click on a given line to be taken to the original source](http://stackoverflow.com/questions/19550060/how-do-i-toggle-source-mapping-in-safari-7).  
 2. Do **not** enable serving files from your filesystem in Chrome dev tools. If you do, Chrome (and perhaps other browsers) may not show you the latest version of your code after you make a source code change. Instead **you must close the source view tab you were using and reopen it to see the updated source code**. It appears Chrome clings to the old sourcemap until you close and reopen the source view tab. To clarify, you don't have to close the actual tab that is displaying the app, just the tab in the console that's displaying the source file that you just changed.  
 3. If the latest source isn't displaying the console, force a refresh. Sometimes Chrome seems to hold onto a previous version of the sourcemap which will cause you to see stale code.

### Why does the build use npm scripts instead of Gulp or Grunt?
In short, Gulp is an unnecessary abstraction that creates more problems than it solves. [Here's why](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n).

### Why does package.json reference the exact version?
This assures that the build won't break when some new version is released. Unfortunately, many package authors don't properly honor [Semantic Versioning](http://semver.org), so instead, as new versions are released, I'll test them and then introduce them into the starter kit. But yes, this means when you do `npm update` no new dependencies will be pulled down. You'll have to update package.json with the new version manually.

### How do I handle images?
Via <a href="https://github.com/webpack/file-loader">Webpack's file loader</a>. Example: 

```
<img src={require('./src/images/myImage.jpg')} />

```

Webpack will then intelligently handle your image for you. For the production build, it will copy the physical file to /dist, give it a unique filename, and insert the appropriate path in your image tag.

### I'm getting an error when running npm install: Failed to locate "CL.exe"
On Windows, you need to install extra dependencies for browser-sync to build and install successfully. Follow the getting started steps above to assure you have the necessary dependencies on your machine.

### I can't access the external URL for Browsersync
To hit the external URL, all devices must be on the same LAN. So this may mean your dev machine needs to be on the same Wifi as the mobile devices you're testing.

### What about the Redux Devtools?
Install the [Redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) in Chrome Developer Tools. If you're interested in running Redux dev tools cross-browser, Barry Staes created a [branch with the devtools incorporated](https://github.com/coryhouse/react-slingshot/pull/27).

### Hot reloading isn't working!
Hot reloading doesn't always play nicely with stateless functional components at this time. [This is a known limitation that is currently being worked](https://github.com/gaearon/babel-plugin-react-transform/issues/57). To avoid issues with hot reloading for now, use a traditional class-based React component at the top of your component hierarchy.

### How do I setup code coverage reporting?
Using the `npm run test:cover` command to run the tests, building a code coverage report. The report is written to `coverage/index.html`. A quick way to check coverage is:

```bash
npm run test:cover
open ./coverage/index.html
```
