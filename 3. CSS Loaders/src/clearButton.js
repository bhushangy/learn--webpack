import style from "./clearButton.css";
// Using css modules here

// import './index.css';
// This is normal css import. Not modules.
// Usually, you will have one index.css and import @import all the other css files in that file then import that file here.
// Like in the portfolio project.

console.log(style);

// Note that you cannot use both modules and normal css method for styling. If you use modules, then webpack will convert all 
// the classnames to hashes. You can opt out of this by making some classes global. https://stackoverflow.com/questions/43613619/what-does-global-colon-global-do

const el = document.createElement("button");
el.innerHTML = "Clear";
el.classList.add([style.button]); // CSS modules
// el.classList.add(['button']); // Global CSS i.e if you just do import './index.css' and expoect to find the .button class in style tag in index.html
el.onclick = function () {
  alert("Clear clicked");
};
document.body.appendChild(el);
