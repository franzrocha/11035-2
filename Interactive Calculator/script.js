function add_number() {

    var first_number = parseInt(document.getElementById("num1").value);
    var second_number = parseInt(document.getElementById("num2").value);
    var result = first_number + second_number;

    document.getElementById("txtresult").value = result;
}

function sub_number() {

    var first_number = parseInt(document.getElementById("num1").value);
    var second_number = parseInt(document.getElementById("num2").value);
    var result = first_number - second_number;

    document.getElementById("txtresult").value = result;
}

function multiply_number() {

    var first_number = parseInt(document.getElementById("num1").value);
    var second_number = parseInt(document.getElementById("num2").value);
    var result = first_number * second_number;

    document.getElementById("txtresult").value = result;
}

function divide_number() {

    var first_number = parseInt(document.getElementById("num1").value);
    var second_number = parseInt(document.getElementById("num2").value);
    var result = first_number / second_number;

    document.getElementById("txtresult").value = result;
}

function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
	localStorage.lightMode = "light";
	app.setAttribute("light-mode", "light");
    } else {
	localStorage.lightMode = "dark";
	app.setAttribute("light-mode", "dark");
    }		
}

var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
}   