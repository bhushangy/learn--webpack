// So this config file is nothing but a js program. Webpack itself is a js program. Now sll these js code
// is executed using node runtime. So when you start webpack using npm scripts, under the hood it is essentially
// doing something like - node ./webpack/bin/index.js
// Now this script will require this config file and then executes it.
// Now since it is being executed in a node environmentm you get access to all node global variables like __dirname, libs
// like path, require etc.
// Now can you use import path here ? Depends on the version of node you are using. If it supports import statements, then yes !!

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
