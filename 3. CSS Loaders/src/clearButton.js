import style from "./clearButton.css";
// Using css modules here

// import './index.css';
// This is normal css import when you are not using modules.
// Usually, you will have one index.css and import @import all the other css files in that file then import that file here.
// Like in the portfolio project.
// Here there is potential for name space collison.

console.log(style);

// Note that you cannot use both modules and normal css method for styling in your codebase. If you use modules, then webpack will convert all 
// the classnames to hashes. You can opt out of this by making some classes global. https://stackoverflow.com/questions/43613619/what-does-global-colon-global-do

const el = document.createElement("button");
el.innerHTML = "Clear";
el.classList.add([style.button]); // CSS modules
// el.classList.add(['button']); // Global CSS i.e if you just do import './index.css' and expoect to find the .button class in style tag in index.html
el.onclick = function () {
  alert("Clear clicked");
};
document.body.appendChild(el);


// CSS Modules


import styles from './index.css';
// index.css is imported twice, once in index.js and once in clearButton.js.
// But the hash for classes will be generaed only once.
// Every time you import the same index.css, the same hash will be used. You will get back the same style object.
// The div element will have the same hash in both the files since the styles are same.
// Of course you can create a new index2.css file with same styles and import it in clearButton.js, then you will get a new hash.

const div = document.createElement('div');
div.classList.add([styles.container]);
document.body.appendChild(div);


const a = 'a';
console.log(a)