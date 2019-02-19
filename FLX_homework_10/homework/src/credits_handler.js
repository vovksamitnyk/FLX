function UserCard(x) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = x;

    this.putCredits = function(amountOfMoney) {
        historyLogs.push({operationType: 'Reseived credits', credits: amountOfMoney, operationTime: new Date()});
        balance += amountOfMoney;
    }
    this.takeCredits = function(amountOfMoney) {
        if (transactionLimit >= amountOfMoney) {
            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: amountOfMoney,
                operationTime: new Date()
            });
            balance -= amountOfMoney;
        } else {
            console.error('You can not withdraw ' + amountOfMoney + ' Limit is: ' + transactionLimit);
        }
    }
    this.setTransactionLimit = function(limit) {
        historyLogs.push({operationType: 'Transaction limit change', credits: limit, operationTime: new Date()})
        transactionLimit = limit;
    }
    this.transferCredits = function(amountOfMoney, recipientCard) {
        if (transactionLimit >= amountOfMoney) {
            let tax = 0.005;
            let taxed = amountOfMoney * tax + amountOfMoney;
            this.takeCredits(taxed);
            recipientCard.putCredits(amountOfMoney);
        } else {
            console.error('You can not transfer ' + amountOfMoney + ' Limit is: ' + transactionLimit);
        }
    }
    this.getCardOptions = function() {
        return {
            balance: balance,
            transactionLimit: transactionLimit,
            historyLogs: historyLogs,
            key: key
        }
    }
    return this;
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        let amountOfCardsOfUser = 0;
        let maximumAmountOfCardsOfUser = 3;
        if (amountOfCardsOfUser <= maximumAmountOfCardsOfUser) {
            let x = this.cards.length + 1;
            const card = new UserCard(x);
            this.cards.push(card);
        }
    }
    getCardByKey(key) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].getCardOptions().key === key) {
                return this.cards[i];
            }
        }
    }
}


let user = new UserAccount('Bob');
user.addCard()
user.addCard()

const numKey1 = 1;
const numKey2 = 2;

let card1 = user.getCardByKey(numKey1);
let card2 = user.getCardByKey(numKey2);

let temporaryNumber500 = 500;
let temporaryNumber800 = 800;
let temporaryNumber300 = 300;
let temporaryNumber50 = 50;

card1.putCredits(temporaryNumber500);
card1.setTransactionLimit(temporaryNumber800);
card1.transferCredits(temporaryNumber300, card2);

card2.takeCredits(temporaryNumber50);
