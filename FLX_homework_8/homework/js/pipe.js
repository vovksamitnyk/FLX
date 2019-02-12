function addOne(x) {
    return x + 1;
}

function pipe () {
    let intermediateVariable = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        intermediateVariable = arguments[i](intermediateVariable);
    }
    return intermediateVariable;
}
pipe (1, addOne);
pipe (1, addOne, addOne);
pipe (1, addOne, addOne, addOne, addOne, addOne, addOne, addOne);
