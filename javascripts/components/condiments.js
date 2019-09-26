import utilities from '../helpers/utilities.js';

const condiments = [
    {id:"condiment1", name:"Red Pepper Flakes", price: 10 },
    {id:"condiment2", name:"Ranch", price: 10 },
    {id:"condiment3", name:"BBQ sauce", price: 10 },
    {id:"condiment4", name:"Garlic Butter", price: 10 },
    {id:"condiment5", name:"Fresh Herbs", price: 10 },
];

const getSelectedCheeses = () => {
    
};

const printCondimentOptions = () => {
    let domStringCondiments= `<h4>Condiment Options</h4>`;
    for(let i=0; i < condiments.length; i++){
        domStringCondiments +=`<div class="form-check">
        <input type="checkbox" class="form-check-input meats" id=${condiments[i].id}>
        <label class="form-check-label" for=${condiments[i].id}>${condiments[i].name}</label>
      </div>`;
    }
    utilities.printToDom('condiments-counter', domStringCondiments);
};


export default { printCondimentOptions };