import { menuArray } from "./data.js";

const menu = document.getElementById("menu");
const yourOrder = document.getElementById("yourOrder");


const menuItems = menuArray.map(function(item){
    const { name, ingredients, price, emoji } = item;
    return `
            <div id="menuItem">
                <div id="emojiDiv">
                    <h1 id="emoji">${emoji}</h1>
                </div>

                <div id="itemInfoDiv">
                    <h2 id="name">${name}</h2>
                    <p id="ingredients">${ingredients}</p>
                    <h2 id="price">$${price}</h2>
                </div>

                <div id="btnDiv">
                    <button id="addItemBtn">+</button>
                </div>
            </div>
            <hr class="line">
    `
}).join("")

menu.innerHTML = menuItems

