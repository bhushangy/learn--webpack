import _ from "lodash";
import style from "./index.css";
import "./clearButton";

const a = 'aaaaaa'; // variable a is defined in both clearButton and here in index.js
console.log(a)

/*
See do not get confused here with the import of './clearButton'
When you import button.js in index.js using import './button.js', Webpack includes the contents of button.js in the bundled output.
The code in button.js will be executed in its own scope. Any variables or functions declared in button.js won't pollute the global namespace unless explicitly attached to the global object.
Any side effects (like DOM manipulation) in button.js will be executed when the module is imported.
Even if you do not export anything from the clearButton, it is treated as a separate module by webpack.
variable a is defined in both clearButton and here in index.js
*/

console.log(style);

const btn1 = document.getElementById("button1");

btn1.addEventListener("click", function () {
  const el = document.getElementById("header");
  el.innerHTML = "Hey i have updated the code !";

  const listItems = ["Apple", "orange", "Banana"];
  const ul = document.getElementById("shoppingList");
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
});

btn1.classList.add([style.button]);

const div = document.createElement('div')
div.classList.add([style.container]);
document.body.appendChild(div);