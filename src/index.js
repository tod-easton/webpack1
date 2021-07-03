import { pascalCase } from "pascal-case";
import themessage from "./message.js";

import './css/coffee.css';
import './css/colors.css';
import './css/main.css';

const title = document.getElementById("title");

title.innerHTML = pascalCase(themessage);

 