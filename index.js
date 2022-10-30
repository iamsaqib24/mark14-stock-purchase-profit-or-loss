const initialPrice = document.querySelector('#initial-price');
const stockQuantity = document.querySelector('#stock-quantity');
const currentPrice = document.querySelector('#current-price');
const submitbutton = document.querySelector('#submit-btn');
const outputArea = document.querySelector('#output-area');

function checkProfitOrLoss() {
    // console.log(initialPrice.value);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current){
        let loss = (initial - current) * quantity;
        let lossPercentage = (loss/initial) * 100;

        console.log(`loss is ${loss} and loss percentage is ${lossPercentage}%.`);
    }
    else if (initial < current){
        let profit = (current - initial) * quantity;
        let profitPercentage = (profit/initial) * 100;

        console.log(`profit is ${profit} and profit percentage is ${profitPercentage}%.`);
    }
    else{
        console.log(`Neither profit nor loss!`);
    }
}
// calculateProfitAndLoss(100, 10, 10);
// calculateProfitAndLoss(20, 10, 100);
// calculateProfitAndLoss(100, 100, 100);



submitbutton.addEventListener('click', checkProfitOrLoss);
