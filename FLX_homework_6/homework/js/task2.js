let inputPriсe, inputDiscount, correctInputData;

correctInputData = true;

inputPriсe = parseFloat(prompt("Input priсe please:"));
if (!isNaN(inputPriсe) && inputPriсe >= 0 && inputPriсe <= 9999999) {
    inputDiscount = parseFloat(prompt("Input discount (0-99%):"));
} else {
    correctInputData = false;
}
if (!isNaN(inputDiscount) && inputDiscount >= 0 && inputDiscount <= 99 && correctInputData) {
    let saved = inputPriсe * inputDiscount / 100;
    saved = +saved.toFixed(2);
    let priseWithDiscnt = inputPriсe - saved;
    priсeWithDiscnt = +priсeWithDiscnt.toFixed(2);
    alert("Price without discount:  " + inputPriсe + "\nDiscount:  " + inputDiscount
          + "%\nPrice with discount:  " + priсeWithDiscnt + "\nSaved:  " + saved);
} else {
    alert("invalid input data");
}
