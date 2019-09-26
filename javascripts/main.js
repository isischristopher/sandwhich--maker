import cheese from './components/cheese.js';
import bread from './components/bread.js';

const buttonClick = () => {
    console.log('hi');
    document.getElementById('myFirstButton').addEventListener('click', buttonClick);
 };
  
 

const init = () => {
    bread.printBreadOptions();
    cheese.printCheeseOptions();
    buttonClick();
};

init();