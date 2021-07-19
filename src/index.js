import { pascalCase } from "pascal-case";
import themessage from "./message.js";
import Spock from './Spock.png'; 

import './css/coffee.css';
import './css/colors.css';
import './css/main.css';

const title = document.getElementById("title");

title.innerHTML = pascalCase(themessage);

   // Add the image to our existing div.
   const myNewImage = new Image();
   myNewImage.src = Spock;
 
   element.appendChild(myNewImage);
 