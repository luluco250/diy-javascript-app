import { helloWorld } from "./components/hello-world";
import { vergil } from "./components/vergil";
import "./fonts/SourceSansPro/font.css";

const root = document.getElementById("root");
root.appendChild(helloWorld());
root.appendChild(vergil());
