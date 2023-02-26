const headerNavData = [
    { text: 'List Cheeses', file: 'list.html' },
    { text: 'Search Cheeses', file: 'search.html' }
  ];
  
  
  const footerNavData = [
    { text: 'Support', file: 'support.html' },
    { text: 'Orders', file: 'orders.html' },
    { text: 'Contact', file: 'contact.html' },
    { text: 'Cheese Vendors', file: 'vendors.html' }
  ];
  function createNav(navData) {
    const nav = document.createElement('nav');
    navData.forEach((item) => {
      const link = document.createElement('a');
      link.href = item.file;
      link.textContent = item.text;
      nav.appendChild(link);
    });
    return nav;
  }
  window.addEventListener('DOMContentLoaded', () => {
    const headerNav = createNav(headerNavData);
    const header = document.querySelector('header');
    header.appendChild(headerNav);
    
    const footerNav = createNav(footerNavData);
    const footer = document.querySelector('footer');
    footer.insertBefore(footerNav, footer.querySelector('address'));
  });

const cheeseForm = document.querySelector("#cheeseForm");
const weightInput = document.querySelector('#weight');
const unitsInput = document.querySelector('#units');
const weightError = document.querySelector('#weightError');

cheeseForm.addEventListener('submit', function(event) {
 if (unitsInput.value === 'square' || unitsInput.value === 'tomme') {
   if (weightInput.value < 5) {
     weightInput.setCustomValidity('Weight must be 5 or more for Square and Tomme.');
     weightError.textContent = weightInput.validationMessage;
     event.preventDefault();
   } else {
     weightInput.setCustomValidity('');
     weightError.textContent = '';
   }
 }
});



cheeseForm.addEventListener("submit", e => {

  e.preventDefault();



  const cheeseName = document.querySelector("#name");

  const cheeseWeight = document.querySelector("#weight");

  const cheeseUnits = document.querySelector("#units");

  const cheesePrice = document.querySelector("#price");

  const cheeseUrl = document.querySelector("#url");

  const cheeseQuantity = document.querySelector("#quantity");



  const Cheese = {

    name: cheeseName.value,

    weight: cheeseWeight.value,

    units: cheeseUnits.value,

    price: cheesePrice.value,

    url: cheeseUrl.value,

    quantity: cheeseQuantity.value,

    get cheeseLink() {

      if (this.url === "") {

        return this.name;

      } else {

        return `<a href="${this.url}" target="_blank">${this.name}</a>`;

      }

    }

  };



  const list = document.querySelector("#cheeseList");



  let item = document.createElement("li");



  item.innerHTML = `${Cheese.quantity} x ${Cheese.cheeseLink} ${Cheese.weight.toFixed(

    1

  )} ${Cheese.units}`;



  list.appendChild(item);

});



