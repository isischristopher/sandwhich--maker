import breads from './bread.js';
import meats from './meats.js';
import cheese from './cheese.js';
import condiments from './condiments.js';
import veggies from './veggies.js';
import utilities from '../helpers/utilities.js';





// PRINT ALL INGREDIENTS AND PRICES
const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i=0; i < items.length; i++){
        domString2 += `
                <p class="card-text">
                <h6>${items[i].name}</h6>
                <h6>$${items[i].price/100}</h6>
                </p>
        `;
    }
    utilities.printToDom('final-order', domString2);
}

//PULL ALL THE SELECTED INGREDIENTS TOGETHER
const createOrderEvent = () => {
    const selectedBreads= breads.getSelectedBreads();
    const selectedMeats= meats.getSelectedMeats();
    const selectedCheeses= cheese.getSelectedCheeses();
    const selectedCondiments= condiments.getSelectedCondiments();
    const selectedVeggies= veggies.getSelectedVeggies();
    const finalSandwich= [].concat(selectedBreads, selectedMeats, selectedCheeses, selectedCondiments, selectedVeggies);
    createFinalOrder(finalSandwich); // combo of the above
}

//FIND THE SUM PRICE OF THE SELECTED INGREDIENTS
const addPrice = (items) => {
    let domString3 = '';
    let sum= 0;
    for (let j=0; j < items.length; j++){
        sum += items[j].price;
    }
    let price = sum/100;
    domString3 += `<h3>$${price}</h3>`
    utilities.printToDom('order-price', domString3);
}

const printOrderButton = () => {
        const domString= '<button id="order-btn" class="btn-success">Create Order</button>'
        utilities.printToDom('final-order', domString);
        document.getElementById('order-btn').addEventListener('click', createOrderEvent);
};

export default { printOrderButton };