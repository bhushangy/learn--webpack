import style from "./clearButton.scss";
import indexStyles from './index.css'
// You can use both .css (only as css modules) and .scss (only as css modules) together in the same code base

const el1 = document.createElement("button");
const el2 = document.createElement("button");
el1.innerHTML = "Clear";
el2.innerHTML = "Submit";
el2.classList.add([indexStyles.button]);
el1.classList.add([style.button]);
// The style with style.button(hashed) class name will be injected into HTML by style-loader
el1.onclick = function () {
  alert("Clear clicked");
};
document.body.appendChild(el1);
document.body.appendChild(el2);
