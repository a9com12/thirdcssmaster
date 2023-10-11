const plusBtn = document.querySelector(".product__plus");
const minusBtn = document.querySelector(".product__minus");
let qty = document.querySelector(".product__total--qty");


function handlePlusClick () {
let number = parseInt(qty.innerText) + 1;
qty.innerText = number;
}

function handleMinusClick () {
let number = parseInt(qty.innerText) - 1;
qty.innerText = number;    
}

plusBtn.addEventListener("click", handlePlusClick);
minusBtn.addEventListener("click", handleMinusClick);