import { menuArray } from "./data.js";

const menu = document.getElementById("menu");
const yourOrder = document.getElementById("yourOrder");


const menuItems = menuArray.map(function(item){
    const { name, ingredients, price, emoji, id } = item;
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
                    <button id="addItemBtn" value=${id}>+</button>
                </div>
            </div>
            <hr class="line">
    `
}).join("")

menu.innerHTML = menuItems

let orderSummary = ''
let orderSummaryArr = []
document.body.addEventListener('click', function(event) {

    if(event.target.value){
        for(let item of menuArray){
            if(item.id == event.target.value){
                orderSummaryArr.push(item.id)
            }

        }
    }

    orderSummary += `<h2></h2>`;
});



yourOrder.innerHTML = `
                        <h1>Your order</h1>
                        <button>Complete order</button>
                      ` 
