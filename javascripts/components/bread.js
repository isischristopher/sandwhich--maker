import utilities from '../helpers/utilities.js';

const breads = [];

const getSelectedBreads = () => {

};

const printBreadOptions = () => {
    let domString1= `<h2>bread</h2>`;
    utilities.printToDom('bread-counter', domString1);
};

export default { printBreadOptions };
