import { pascalCase } from "pascal-case";
import  themessage  from "./message.js";

const title = document.getElementById("title");

title.innerHTML = pascalCase(themessage);

 