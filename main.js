const { subtract } = require('./functions/subtract');
import add from './functions/add.js';

// You can use both CommonJs and ESModule with webpack in the same codebase.
// Meaning, you can require modules that still use CommonJS and you can you import and export for the rest.
// Webpack will take care of the conversion.

const addOutput = add(1, 2);
const subOutput = subtract(10, 2);

console.log(addOutput);
console.log(subOutput);
