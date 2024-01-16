
const passengerNameInput = document.getElementById('user-name');
const passengerKmInput = document.getElementById('user-km');
const passengerAgeInput = document.getElementById('user-age');
const generateTicketButton = document.getElementById('generate-ticket');


const ticketNameEelement = document.getElementById('ticket-pn');
const ticketOffertaElement = document.getElementById('offerta');
const ticketCarrozzaElement = document.getElementById('carrozza');
const ticketFareElement = document.getElementById('ticket-fare');

const ticketCodiceElement = document.getElementById('codice');



generateTicketButton.addEventListener('click', function() {
    const name = passengerNameInput.value;
    const km = passengerKmInput.value;
    const age = passengerAgeInput.value;
    const carrozza = Math.floor(Math.random() * 24 + 1);
    const codice = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);

    const priceKm = 0.21;
    const priceBase = priceKm * km;
    
    let discountPerc = 0;
    let DiscountText = 'biglietto standard';

    if (age == "minorenne") {
        discountPerc = 20;
        DiscountText = 'offerta under18';
    } else if (age == "over65") {
        discountPerc = 40;
        DiscountText = 'offerta over65';
    }
    
    const discountEur = priceBase * discountPerc / 100;
    const priceFinal = priceBase - discountEur;
    const priceFinalText = '€' + priceFinal.toFixed(2);
    ticketFareElement.innerText = priceFinalText;
    ticketNameEelement.innerText = name;
    ticketOffertaElement.innerText = DiscountText;
    ticketCarrozzaElement.innerText = carrozza;
    ticketCodiceElement.innerText = codice;
   

    
});