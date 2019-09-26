import utilities from '../helpers/utilities.js';

const cheeses = [];

const getSelectedCheeses = () => {

};

const printCheeseOptions = () => {
    let domString= `<h2>cheese</h2>`;
    utilities.printToDom('cheese-counter', domString);
};

export default { printCheeseOptions };
