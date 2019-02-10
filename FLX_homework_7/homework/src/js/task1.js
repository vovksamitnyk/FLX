const user01 = {login: "User", password: "UserPass"};
const user02 = {login: "Admin", password: "RootPass"};

let arrayLogins = [user01, user02];

let userFound = false;
let wrongEnter = false;

let enterLogin = prompt("Enter login:");
if (enterLogin) {
    if (enterLogin.length < 4 ) {
        alert("I don't know any users having name " +
              "length less than 4 symbols");
    }
    for (let i = 0; i < arrayLogins.length; i++) {
        if (enterLogin === arrayLogins[i].login) {
            let enterPassword = prompt("Enter password:");
            if (enterPassword === arrayLogins[i].password) {
                let currentTime = new Date().getHours();
                userFound = true;
                let goodWords = "Good day,";
                if (currentTime > 20 || currentTime < 5) {
                    goodWords = "Good evening,";
                }
                alert(goodWords + " dear " + enterLogin + "!");
            } else {
                alert("Wrong password!");
            }
            break
        }
    }
    if (!userFound && enterLogin.length >= 4) {
        alert("I don’t know you.");
    }

} else {
    wrongEnter = true;
}

if (wrongEnter) {
    alert("Canceled.");
}
