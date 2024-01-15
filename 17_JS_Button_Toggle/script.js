import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = '<button id="btn">ON</button>';

let isOn = true;

$("#btn").on("click", ()=>{
    if (isOn){
        $("#btn").text("OFF");
        isOn = false;
    } else {
        $("#btn").text("ON");
        isOn = true;
    }
});