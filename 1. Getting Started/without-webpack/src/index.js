import React from 'react';
// This will not work unless there is bundler tool like webpack.
// Browsers can't directly import modules from node_modules.
// The module resolution in the browser is different from Node.js. 
// In Node.js, the module resolution algorithm looks into node_modules and follows a certain hierarchy to resolve dependencies.
// Browsers do not have this built-in module resolution algorithm and do not know how to locate the modules in node_modules.
// Browsers require exact file paths for modules.When you write import React from 'react', Node.js resolves 'react' to something like 'node_modules/react/index.js'.
// Browsers do not have this capability and need exact URLs. You would need to write import React from './node_modules/react/index.js', which is impractical and cumbersome.

// So this entire concept of dependecy management via CommonJS system and node_modules and was first introduced in Node.js. 
// Before that dependcies were still loaded using script tags on the browser side.

// With the introduction of bundlers like browserify and webpack, the nodejs system of dependency mgmt could also be adopted on the browser side.

// Browserify was one of the first popular tools that allowed developers to use Node.js-style require statements in the browser. It takes a single entry point file and recursively follows all the require statements to bundle up all dependencies into a single JavaScript file.

// Bundlers like Webpack, Rollup, or Parcel combine multiple JavaScript files into a single file or a few files to reduce the number of HTTP requests, which is crucial for performance.
// They also perform optimizations like tree-shaking (removing unused code), code splitting (loading code on demand), and minification (reducing file size).


// How webpack works ?

// Module Resolution:
// Webpack resolves the import _ from 'lodash'; statement in src/index.js by looking into node_modules and finding the lodash package.

// Bundling:
// Webpack bundles the lodash code along with your own code into a single file (bundle.js). This reduces the number of HTTP requests and makes it easier to load dependencies in the browser.

// Transpilation:
// Webpack uses Babel to transpile modern JavaScript (ES6) code into a format that is compatible with older browsers. This is configured through babel-loader and the .babelrc file.

// Output:
// The final bundled JavaScript file (bundle.js) is placed in the dist directory. This file is then included in the HTML file via a <script> tag, making it available to the browser.

