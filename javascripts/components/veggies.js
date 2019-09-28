import utilities from '../helpers/utilities.js';

const veggies = [
    {id:"veggies1", name:"Mushrooms", price: 10 },
    {id:"veggies2", name:"Roasted Onions", price: 10 },
    {id:"veggies3", name:"Tomato", price: 10 },
    {id:"veggies4", name:"Bell Pepper", price: 10 },
    {id:"veggies5", name:"Spinach", price: 10 },
];

// RETURNS THE SELECTED Veggies
const getSelectedVeggies = () => {
    const selectedVeggies = [];
    const veggiesCheckboxes = document.getElementsByClassName('veggies');

    for(let j=0; j < veggiesCheckboxes.length; j++){
        for(let k=0; k < veggies.length; k++){
            if(veggiesCheckboxes[j].checked && veggiesCheckboxes[j].id === veggies[k].id){
                selectedVeggies.push(veggies[k]);
            }
        }
    }
    return selectedVeggies;
};

const printVeggiesOptions = () => {
    let domStringVeggies= `<h4>Veggies Options</h4>`;
    for(let i=0; i < veggies.length; i++){
        domStringVeggies +=`<div class="form-check">
        <input type="checkbox" class="form-check-input veggies" id=${veggies[i].id}>
        <label class="form-check-label" for=${veggies[i].id}>${veggies[i].name}</label>
      </div>`;
    }
    utilities.printToDom('veggies-counter', domStringVeggies);
};


export default { printVeggiesOptions, getSelectedVeggies };