import data from "./data.json5";
import "./style.css";

export function helloWorld() {
	const h1 = document.createElement("h1");
	h1.classList.add("hello-world");
	h1.textContent = data.text;

	return h1;
}
