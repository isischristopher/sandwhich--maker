import utilities from '../helpers/utilities.js';

const veggies = [
    {id:"veggies1", name:"Mushrooms", price: 10 },
    {id:"veggies2", name:"Roasted Onions", price: 10 },
    {id:"veggies3", name:"Tomato", price: 10 },
    {id:"veggies4", name:"Bell Pepper", price: 10 },
    {id:"veggies5", name:"Spinach", price: 10 },
];

const getSelectedVeggies = () => {
    
};

const printVeggiesOptions = () => {
    let domStringVeggies= `<h4>Veggies Options</h4>`;
    for(let i=0; i < veggies.length; i++){
        domStringVeggies +=`<div class="form-check">
        <input type="checkbox" class="form-check-input meats" id=${veggies[i].id}>
        <label class="form-check-label" for=${veggies[i].id}>${veggies[i].name}</label>
      </div>`;
    }
    utilities.printToDom('veggies-counter', domStringVeggies);
};


export default { printVeggiesOptions };