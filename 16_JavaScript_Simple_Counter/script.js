import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = `<div id="mainArea">
  <p>button count: <span id="counter">0</span></p>
  <button id="mainButton">Increase</button>
</div>`;

let count = 0;

$("#mainButton").on("click", ()=>{
    count++;
    $("#counter").text(count);
});