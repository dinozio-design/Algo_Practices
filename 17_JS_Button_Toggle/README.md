## JS Button Toggle
We provided some simple JavaScript template code. Your goal is to modify the application so that you can properly toggle the button to switch between an ON state and an OFF state. When the button is on and it is clicked, it turns off and the text within it changes from ON to OFF and vice versa. Only replace the text within the DOM element, do not replace the entire DOM element. You are free to add classes and styles, but make sure you leave the element ID's as they are.

Submit your code once it is complete and our system will validate your output.

```js
import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = '<button>ON</button>';
```