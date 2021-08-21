// momory part
const momoryEight = document.getElementById('eight-momory');

const momorSixten = document.getElementById('sixten-momory');
// call by id  storage
const storageFrist = document.getElementById('storage-first');
const storageSecond = document.getElementById('storage-second');
const storageThird = document.getElementById('storage-third');

// called delivery 
const deliveryFrist = document.getElementById('delivery-frist');

const deliverySecond = document.getElementById('delivery-second');


// price 
const bestPrice = document.getElementById('best-price');
const etramomoey = document.getElementById('extra-momory');
const extraStorge = document.getElementById('extra-shortage');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');



// momory event

momoryEight.addEventListener('click', function () {
    bestPrice.innerText = "1299";
    etramomoey.innerText = "0";
    updatetotal();
    upatelast();


});
momorSixten.addEventListener('click', function () {
    bestPrice.innerText = "1299";
    etramomoey.innerText = "180"
    updatetotal();
    upatelast();



});


//  add event stoage handle 
storageFrist.addEventListener('click', function () {
    bestPrice.innerText = "1299";
    extraStorge.innerText = "0";
    updatetotal();
    upatelast();





});
storageSecond.addEventListener('click', function () {
    bestPrice.innerText = "1299";
    extraStorge.innerText = "100";
    updatetotal();
    upatelast();




});
storageThird.addEventListener('click', function () {
    bestPrice.innerText = "1299";
    extraStorge.innerText = "180";
    updatetotal();
    upatelast();


});

// delivery event handle



deliveryFrist.addEventListener('click', function () {
    bestPrice.innerText = "1299";
    deliveryCharge.innerText = "0"
    updatetotal();
    upatelast();


});

deliverySecond.addEventListener('click', function () {
    bestPrice.innerText = "1299";
    deliveryCharge.innerText = "20"
    updatetotal();
    upatelast();

});

// upate total
function updatetotal() {
    const bestPriseText = Number(bestPrice.innerText);
    const etraMomoeyText = Number(etramomoey.innerText);
    const extraStorgeText = Number(extraStorge.innerText);
    const deliveryChargerText = Number(deliveryCharge.innerText);

    const subTotal = bestPriseText + etraMomoeyText + extraStorgeText + deliveryChargerText;
    totalPrice.innerText = subTotal;



};
const lastTotal = document.getElementById('sub-total');


function upatelast() {

    const bestPriseText = Number(bestPrice.innerText);
    const etraMomoeyText = Number(etramomoey.innerText);
    const extraStorgeText = Number(extraStorge.innerText);
    const deliveryChargerText = Number(deliveryCharge.innerText);
    const totolLast = bestPriseText + etraMomoeyText + extraStorgeText + deliveryChargerText;
    lastTotal.innerText = totolLast





}















