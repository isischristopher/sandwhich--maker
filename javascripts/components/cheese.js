import utilities from '../helpers/utilities.js';

const cheeses = [
    {id:"cheese1", name:"Cheddar", price: 60 },
    {id:"cheese2", name:"Mozzarella", price: 60 },
    {id:"cheese3", name:"Parmesan", price: 65 },
    {id:"cheese4", name:"Ricotta", price: 50 },
    {id:"cheese5", name:"Provolone", price: 70 },
];

const getSelectedCheeses = () => {
    
};

const printCheeseOptions = () => {
    let domStringCheeses= `<h4>Cheese Options</h4>`;
    for(let i=0; i < cheeses.length; i++){
        domStringCheeses +=`<div class="form-check">
        <input type="checkbox" class="form-check-input meats" id=${cheeses[i].id}>
        <label class="form-check-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
      </div>`;
    }
    utilities.printToDom('cheese-counter', domStringCheeses);
};


export default { printCheeseOptions };
