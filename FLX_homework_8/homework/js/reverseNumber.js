function reverseNumber (a) {
    a += "";

    let array = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== "-") {
            array.unshift(a[i]);
        }
    }
    let variable = array.join("");

    if (a < 0) {
        return -1 * variable;
    } else {
        return 1 * variable;
    }
}
reverseNumber (123);
reverseNumber (-456);
reverseNumber (10000);
