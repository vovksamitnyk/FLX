let start = confirm("START\nDo you want to play a game?");

if (start) {
    let game = true;
    while (game) {
        let topPossiblePrize = 10;
        let topLimitNumber = 5;
        let totalPrize = 0;
        let possiblePrize = 10;

        let randomNumber = Math.floor(Math.random() * (topLimitNumber + 1));

        let attempt = 3;
        let enterGues;

        while (attempt > 0 && enterGues !== randomNumber) {
            if (attempt < 3) {
                possiblePrize = Math.floor(possiblePrize / 2);
            }
            enterGues = parseInt(prompt(
                "Enter a number from 0 to " + topLimitNumber +
                "\nAttempts left: " + attempt +
                "\nTotal prize: " + totalPrize + "$" +
                "\nPossible prize on current attempt: " + possiblePrize + "$"));
            attempt--;
        }

        if (enterGues === randomNumber) {
            totalPrize += possiblePrize;
            let continueGame = confirm("Congratulation!\nYour prize is: " + totalPrize +
                                       "\n\nDo you want to continue?");
            if (continueGame) {
                topLimitNumber *= 2;
                topPossiblePrize *= 3;
                possiblePrize = topPossiblePrize;
                enterGues = undefined;
                randomNumber = Math.floor(Math.random() * (topLimitNumber + 1));

                while (continueGame) {
                    attempt = 3;
                    enterGues = undefined;
                    while (attempt > 0 && enterGues !== randomNumber) {
                        if (attempt < 3) {
                            possiblePrize = Math.floor(possiblePrize / 2);
                        }
                        enterGues = parseInt(prompt("Enter a number from 0 to " + topLimitNumber +
                                                    "\nAttempts left: " + attempt +
                                                    "\nTotal prize: " + totalPrize + "$" +
                                                    "\nPossible prize on current attempt: " + possiblePrize + "$"));
                        attempt--;
                    }

                    if (enterGues === randomNumber) {
                        totalPrize += possiblePrize;
                        continueGame = confirm("Congratulation!\nYour prize is: " + possiblePrize +
                                               "\n\nDo you want to continue?");
                        if (continueGame) {
                            topLimitNumber *= 2;
                            topPossiblePrize *= 3;
                            possiblePrize = topPossiblePrize;
                            randomNumber = Math.floor(Math.random() * (topLimitNumber + 1));
                            enterGues = undefined;
                        }
                    } else {
                        totalPrize = 0;
                        continueGame = false;
                    }
                }
            }
        }

        alert("Thank you for a game. Your prize is: " + totalPrize + "$");
        game = confirm("Do you want play again?");

    }

}
alert("You did not become a millionaire, but can.");
