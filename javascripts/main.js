import cheese from './components/cheese.js';
import bread from './components/bread.js';
import meats from './components/meats.js';
import condiments from './components/condiments.js';
import veggies from './components/veggies.js';
import order from './components/order.js'

const printIngredients = () =>{
    bread.printBreadOptions();
    meats.printMeatOptions ();
    cheese.printCheeseOptions();
    condiments.printCondimentOptions();
    veggies.printVeggiesOptions();
}
const init = () => {
    printIngredients();
    order.printOrderButton();
};

init();

