import { printMe } from "./print";

function component() {
	const div = document.createElement("div");
	div.textContent = "Hello world!";

	const button = document.createElement("button");
	button.textContent = "Click me.";
	button.onclick = printMe;

	div.appendChild(button);
	return div;
}

document.body.appendChild(component());

