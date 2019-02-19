function UserCard(x) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = x;
    const tax = 0.005;

    this.putCredits = function(amountOfMoney) {
        historyLogs.push({operationType: 'Received credits',
                          credits: amountOfMoney, operationTime: new Date().toLocaleString()});
        balance += amountOfMoney;
    }
    this.takeCredits = function(amountOfMoney) {
        if (transactionLimit >= amountOfMoney && balance >= amountOfMoney) {
            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: amountOfMoney,
                operationTime: new Date().toLocaleString()
            });
            balance -= amountOfMoney;
        } else {
            console.error('You can not withdraw ' + amountOfMoney + ' Limit is: ' + transactionLimit);
        }
    }
    this.setTransactionLimit = function(limit) {
        historyLogs.push({operationType: 'Transaction limit change',
                          credits: limit, operationTime: new Date().toLocaleString()})
        transactionLimit = limit;
    }
    this.transferCredits = function(amountOfMoney, recipientCard) {
            let taxed = amountOfMoney * tax + amountOfMoney;
        if (transactionLimit >= amountOfMoney && balance >= taxed) {
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
        let amountOfCardsOfUser = this.cards.length;
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

const cardOneKey = 1;
const cardTwoKey = 2;

let card1 = user.getCardByKey(cardOneKey);
let card2 = user.getCardByKey(cardTwoKey);

let cardOnePut = 500;
let cardOneLimit = 800;
let transfer = 300;
let cardTwoTake = 50;

card1.putCredits(cardOnePut);
card1.setTransactionLimit(cardOneLimit);
card1.transferCredits(transfer, card2);

card2.takeCredits(cardTwoTake);
