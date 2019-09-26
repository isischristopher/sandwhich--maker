import cheese from './components/cheese.js';
import bread from './components/bread.js';
import meats from './components/meats.js';
import condiments from './components/condiments.js';
import veggies from './components/veggies.js';


const init = () => {
    bread.printBreadOptions();
    meats.printMeatOptions ();
    cheese.printCheeseOptions();
    condiments.printCondimentOptions();
    veggies.printVeggiesOptions();
};

init();

//const buttonClick = () => {
    //console.log('hi');
    //document.getElementById('myFirstButton').addEventListener('click', buttonClick);
 //};