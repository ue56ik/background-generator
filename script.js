var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var par = document.querySelector("p");
var button = document.createElement("button");

button.appendChild(document.createTextNode("Random"));
par.appendChild(button);

function generateRandomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    return randomColor;
}

function inputColor1() {
	const colorInput1 = generateRandomColor();
	const colorInput2 = generateRandomColor();
	body.style.background = "linear-gradient(to right, "+colorInput1+", "+colorInput2+")";
	css.textContent = body.style.background+";";
}

button.addEventListener("click",inputColor1);


color1.value="#ff0000";
color2.value="#ffff00";
var gradient= "linear-gradient(to right, "+color1.value+", "+color2.value+")";
css.textContent = gradient+";"

function inputColor() {
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent = body.style.background+";";
}
 color1.addEventListener("input", inputColor);
 color2.addEventListener("input", inputColor);