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



let orderSummary = '';
let orderTotal = '';
let orderSummaryArr = []
document.body.addEventListener('click', function(event) {

    if(event.target.value){
        for(let item of menuArray){
            if(item.id == event.target.value){
                orderSummaryArr.push(item)
            }

        }
    }

    console.log(orderSummaryArr[0].name)

    
    orderSummary = orderSummaryArr.map(function(orderItem){
        return `<div class="individualOrderItemDiv">
                    <div class="itemAndBtn">
                        <h2>${orderItem.name}</h2>
                        <button class="removeBtn">remove</button>
                    </div>
                    <h2>$${orderItem.price}</h2>
                </div>`
                ;
    }).join('');

    let totalPrice = orderSummaryArr.reduce((accumulator, order) => {
        return accumulator + order.price;
      }, 0);

    orderTotal = `<div class="orderTotal">
                        <h2>Total price:</h2>
                        <h2>$${totalPrice}</h2>
                  </div>
                 `

    yourOrder.innerHTML = ` <h2 class="yourOrderTitle">Your order</h2>
                            ${orderSummary}
                            <hr class="line">
                            ${orderTotal}
                            <button id="completeOrderBtn">Complete order</button>
                            `
                            ;
});




