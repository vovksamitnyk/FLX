let inputPrice, inputDiscount, correctInputData;

correctInputData = true;

inputPrice = parseFloat(prompt("Input price please:"));
if (!isNaN(inputPrice) && inputPrice >= 0 && inputPrice <= 9999999) {
    inputDiscount = parseFloat(prompt("Input discount (0-99%):"));
} else {
    correctInputData = false;
}
if (!isNaN(inputDiscount) && inputDiscount >= 0 && inputDiscount <= 99 && correctInputData) {
    let saved = inputPrice * inputDiscount / 100;
    saved = +saved.toFixed(2);
    let priceWithDiscnt = inputPrice - saved;
    priceWithDiscnt = +priceWithDiscnt.toFixed(2);
    alert("Price without discount:  " + inputPrice + "\nDiscount:  " + inputDiscount
          + "%\nPrice with discount:  " + priceWithDiscnt + "\nSaved:  " + saved);
} else {
    alert("invalid input data");
}
