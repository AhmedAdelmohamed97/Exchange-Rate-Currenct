const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-Two');
const amountOne = document.getElementById('amountOne');
const amountTwo = document.getElementById('amountTwo');
const swap = document.getElementById('swap');
const rateEl = document.getElementById('rate');





function calculate(){

    const baseCurrency = currencyOne.value;
    const secondCurrency = currencyTwo.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[secondCurrency]
        amountTwo.value=(amountOne.value * rate).toFixed(2);
        rateEl.innerText = `1 ${baseCurrency} = ${rate} ${secondCurrency}`;
    })
}
calculate()

function swapcurrency(){
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
}


//event listeners


currencyOne.addEventListener('change' , calculate);
amountOne.addEventListener('input' , calculate);
currencyTwo.addEventListener('change' , calculate);
amountTwo.addEventListener('input' , calculate);
swap.addEventListener('click' , swapcurrency);
