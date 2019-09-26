import utilities from '../helpers/utilities.js';

const meats = [
    {id:"meats1", name:"Chicken", price: 60 },
    {id:"meats2", name:"Pepperoni", price: 60 },
    {id:"meats3", name:"Sasuage", price: 65 },
    {id:"meats4", name:"Turkey", price: 50 },
    {id:"meats5", name:"Lamb", price: 70 },
];

const getSelectedMeats = () => {
    
};

const printMeatOptions = () => {
    let domStringMeats= `<h4>Meat Options</h4>`;
    for(let i=0; i < meats.length; i++){
        domStringMeats +=`<div class="form-check">
        <input type="checkbox" class="form-check-input meats" id=${meats[i].id}>
        <label class="form-check-label" for=${meats[i].id}>${meats[i].name}</label>
      </div>`;
    }
    utilities.printToDom('meats-counter', domStringMeats);
};

export default { printMeatOptions };
