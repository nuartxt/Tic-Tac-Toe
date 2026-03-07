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
        let player2_index = Number(prompt("Go 0"));

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


// callPrompt();
// addInGameBox(theInputField);




// /* by cross */

// let result = ""

// let leftCrossArr = [];
// for (let i = 0; i < theInputField.length; i += 4) {
//     leftCrossArr.push(theInputField[i]);
//     if (leftCrossArr.length == 3 && leftCrossArr.every(el => el === "X")) {
//         result = "X win";
//     } else if (leftCrossArr.length == 3 && leftCrossArr.every(el => el === "0")) {
//         result = "0 win";
//     }
// }
// console.log(leftCrossArr)

// let rightCrossArr = [];
// for (let i = 2; i < theInputField.length - 1; i += 2) {
//     rightCrossArr.push(theInputField[i]);
//     if (rightCrossArr.length == 3 && rightCrossArr.every(el => el == "X")) {
//         result = "X win";
//     }
//     if (rightCrossArr.length == 3 && rightCrossArr.every(el => el == "0")) {
//         result = "0 win";
//     }
// }
// console.log(rightCrossArr);

// /* by line */

// let a = theInputField[0];

// for (let i = 0; i < theInputField.length; i++) {
//     if (a == "X" && a + 1 == "X" && a + 2 == "X") {
//         result = "X win";
//     } else if (a == "0" && a + 1 == "0" && a + 2 == "0") {
//         result = "0 win";
//     }
//     if (a + 3 == "X" && a + 4 == "X" && a + 5 == "X") {
//         result = "X win";
//     } else if (a == "0" && a + 1 == "0" && a + 2 == "0") {
//         result = "0 win";
//     }
//     if (a + 6 == "X" && a + 7 == "X" && a + 8 == "X") {
//         result = "X win";
//     } else if (a == "0" && a + 1 == "0" && a + 2 == "0") {
//         result = "0 win";
//     }
// }

/*by column */
let column = 1;
for(let i = 0; i < 3; i++){
    column ++;
}
let columnArr = [];
// for (let i = column; i < theInputField.length; i += 3) {
//     columnArr.push(theInputField[i]);
//     if (columnArr.length == 3 && columnArr.every(el => el == "X")) {
//         result = "X win";
//     } else if (columnArr.length == 3 && columnArr.every(el => el == "0")) {
//         result = "0 win";
//     } else {
//         column++;
//     }
// }
for (let i = 0; i < theInputField.length; i += 3) {
    columnArr.push(theInputField[i]);
}
console.log(columnArr);



console.log(theInputField);
console.log(result);
