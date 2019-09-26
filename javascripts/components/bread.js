import utilities from '../helpers/utilities.js';

const breads = [
    {id:"bread1", name:"Italian", price: 50 },
    {id:"bread2", name:"Wheat", price: 50 },
    {id:"bread3", name:"Sourdough", price: 50 },
    {id:"bread4", name:"Pita", price: 50 },
    {id:"bread5", name:"Rye", price: 50 },
];

const getSelectedBreads = () => {
    
};

const printBreadOptions = () => {
    let domStringBread= `<h4>Bread Options</h4>`;
    for(let i=0; i < breads.length; i++){
        domStringBread +=`<div class="form-check">
        <input type="checkbox" class="form-check-input breads" id=${breads[i].id}>
        <label class="form-check-label" for=${breads[i].id}>${breads[i].name}</label>
      </div>`;
    }
    utilities.printToDom('bread-counter', domStringBread);
};

export default { printBreadOptions };
