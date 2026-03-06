let theInputField = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
];


let stepPlayer1 = [];
let stepPlayer2 = [];



function callPrompt() {
    for (let i = 0; i < 5; i++) {
        let player1_index = Number(prompt("Go X"));
        let player2_index = Number(prompt("Go Y"));

        stepPlayer1.push(player1_index);
        stepPlayer2.push(player2_index);
    }
}

function addInGameBox(bigArray) {
    for (let i = 0; i < bigArray.length; i++) {
        if (stepPlayer1.includes(bigArray[i])) {
            theInputField[i] = "X";
        }
        if (stepPlayer2.includes(bigArray[i])) {
            theInputField[i] = "0";
        }
    }
}


callPrompt();
addInGameBox(theInputField);




/* */

let result = ""

for (let i = 0; i < theInputField.length; i += 4) {
    if (theInputField[i] == "X") {
        result = "X win";
    } else if (theInputField[i] == "0") {
        result = "0 win";
    }
}

for (let i = 2; i < theInputField.length - 1; i += 2) {
    if (theInputField[i] == "X") {
        result = "X win";
    } else if (theInputField[i] == "0") {
        result = "0 win";
    }
}


let a = theInputField[0];


for (let i = 0; i < theInputField.length; i++) {
    if (a == "X" && a + 1 == "X" && a + 2 == "X") {
        result = "X win";
    } else if (a == "0" && a + 1 == "0" && a + 2 == "0")  {
        result = "0 win";
    }
    if (a + 3 == "X" && a + 4 == "X" && a + 5 == "X") {
        result = "X win";
    } else if (a == "0" && a + 1 == "0" && a + 2 == "0") {
        result = "0 win";
    }
    if (a + 6 == "X" && a + 7 == "X" && a + 8 == "X") {
        result = "X win";
    } else if (a == "0" && a + 1 == "0" && a + 2 == "0") {
        result = "0 win";
    }
}





console.log(theInputField);

console.log(result);
