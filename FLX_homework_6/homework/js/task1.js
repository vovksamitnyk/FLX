let a, b, c, x1, x2, correctInputData;

correctInputData = true;


a = parseFloat(prompt ("Enter the number 'a', please."));
if (!isNaN(a) && a !== 0) {
    b = parseFloat(prompt ("Enter the number 'b', please."));
} else {
    correctInputData = false;
}
if (!isNaN(b) && correctInputData) {
    c = parseFloat(prompt ("Enter the number 'c', please."));
} else {
    correctInputData = false;
}
if (!isNaN(c) && correctInputData) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant === 0) {
        x1 = -b / (2 * a);
        alert("x = " + x1);
    } else if (discriminant < 0) {
        alert("no solution")
    } else {
        x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        alert("x1 = " + x1 + "   x2 = " + x2);
    }
    let repeat = confirm("Would You like to repeat?");
    if (repeat) {
        alert("Very well. Please restart the page!")
    } else {
        alert("Good bue!");
    }
} else {
    alert("Invalid input data\nReboot the page and try again if you wish.");
}


