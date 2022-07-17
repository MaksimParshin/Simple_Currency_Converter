const input = require('sync-input');
console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

const currency = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB:	74.36, GBP:	0.75};

while (true) {
    
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    
    let firstNumber = Number(input());
    
    if (firstNumber === 2) {
        console.log("Have a nice day!");
        break;
    } else if (firstNumber === 1) {
        console.log("What do you want to convert?");
        let firstCurrency = input("From: ").toUpperCase();
        if (currency[firstCurrency] === undefined) {
            console.log("Unknown currency");
        } else {
            let secondCurrency = input("To: ").toUpperCase();
            if (currency[secondCurrency] === undefined) {
                console.log("Unknown currency");
            } else {
                let amount = Number(input("Amount: "));
                if (amount < 1) {
                    console.log(`The amount can not be less than 1`);
                }  else if (amount >= 1) {
                    let converted = amount / currency[firstCurrency] * currency[secondCurrency].toFixed(4);
                    console.log(`Result: ${amount} ${firstCurrency} equals ${converted.toFixed(4)} ${secondCurrency}`);
                } else if (isNaN(amount)) {
                    console.log("The amount has to be a number");
                }
            }
        }
    } else { 
        console.log("Unknown input");
    }
}