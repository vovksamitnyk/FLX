function isInteger (a) {
    if (a % 1 === 0) {
        return true;
    }
    return false;
}
isInteger (5);
isInteger (5.1);
