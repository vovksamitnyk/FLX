let people = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
]

/*============"(  01  )"=============*/

function returnsTypes() {
    let type = [];
    for (let i = 0; i < arguments.length; i++) {
        type.push(typeof arguments[i]);
    }
    return type
}
returnsTypes(5, "ejfhvbej", null, alert, false, undefined);



/*============"(  02  )"=============*/

function executeforEach(a, b) {
    for (let i = 0; i < a.length; i++) {
        b(a[i]);
    }
}
executeforEach([3, 4, 56], function(el) {
    console.log(el)
})



/*============"(  03  )"=============*/

function mapArray(a3, b3) {
    let array = [];
    executeforEach (a3, function(x) {
        let resultOfTheFunction = b3(x);
        array.push(resultOfTheFunction);
    });
    return array
}
mapArray([3, 4, 56], function(el) {
    return el + 3
});



/*============"(  04  )"=============*/

function filterArray(a4, b4) {
    let array = [];
    executeforEach (a4, function(x) {
        let resultOfTheInsertedFunction = b4(x);
        if (resultOfTheInsertedFunction) {
            array.push(x)
        }
    });
    return array
}
filterArray( [3, 4, 0, 0, 55, 56], function(el) {
    return el > 3
});



/*============"(  05  )"=============*/

function getAmountOfAdultPeople(data) {
    let amountOfAdultPeople = filterArray ( data, function(x) {
        return x.age > 18
    } );
    return amountOfAdultPeople.length;
}
getAmountOfAdultPeople(people);


/*============"(  06  )"=============*/

function getGreenAdultBananaLovers(data) {

    let greenAdultBananaLovers = filterArray ( data, function(x) {
        return (x.age > 18 && x.eyeColor === "green" && x.favoriteFruit === "banana")
    } );
    let arrayOfNamesOfGreenAdultBananaLovers = mapArray (greenAdultBananaLovers, function(x) {
        return x.name;
    })
    return arrayOfNamesOfGreenAdultBananaLovers
}
getGreenAdultBananaLovers(people);


//*============"(  07  )"=============*/

function keys (a7) {
    let arrayKeys = [];
    for (let key in a7) {
        if (a7.hasOwnProperty(key)) {
            arrayKeys.push(key);
        }
    }
    return arrayKeys
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});



/*============"(  08  )"=============*/

function values(a8) {
    let arrayKeys = keys(a8);
    return mapArray(arrayKeys, function(x) {
        return a8[x]
    })
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});



/*============"(  09  )"=============*/

function showFormattedDate(notFormattedDate) {
    let shortMonth = notFormattedDate.toLocaleString('en-us', { month: 'short' });
    return "Date: " + notFormattedDate.getDate() + " of " + shortMonth + ", " + notFormattedDate.getFullYear();
}
showFormattedDate(new Date('2019-05-27T23:10:00'));



/*============"(  10  )"=============*/

function isEvenYear(Date) {
    if (Date.getFullYear() % 2 !== 0) {
        return false
    } else {
        return true
    }
}
isEvenYear(new Date('2019-01-27T01:10:00'));


/*============"(  11  )"=============*/

function isEvenMonth(Date) {
    if (Date.getMonth() % 2 === 0) {
        return false
    } else {
        return true
    }
}
isEvenMonth(new Date('2019-02-27T01:10:00'));
