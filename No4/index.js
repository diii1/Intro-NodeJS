const text_h1 = document.getElementById('fill-me');
text_h1.innerHTML = 'HALO!';

const pText = document.getElementsByClassName("change-all-of-me");
const h1 = document.getElementById('fill-me');
let changeText = () => {
    for (let i = 0; i < pText.length; i++) {
        pText[i].innerHTML = 'HALO JUGA!';
    }
}
h1.onclick = changeText;

const h2 = document.querySelector('#container h2');
h2.innerHTML = 'Apa Kabar!';

const mainBox = document.getElementById('main');
const tag1 = document.createElement("button");
const textTag1 = document.createTextNode("Ini Button");
const tag2 = document.createElement("button");
const textTag2 = document.createTextNode("Ini Button Juga");
tag1.appendChild(textTag1);
tag2.appendChild(textTag2);
mainBox.appendChild(tag1);
mainBox.appendChild(tag2);