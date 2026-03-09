let theInputField = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
];


let stepPlayer1 = [];
let stepPlayer2 = [];

let result = "";



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


/* Finding winner */

function findWinnerByCross() {
    let leftCrossArr = [];
    for (let i = 0; i < theInputField.length; i += 4) {
        leftCrossArr.push(theInputField[i]);
        if (leftCrossArr.length == 3 && leftCrossArr.every(el => el === "X")) {
            result = "X win";
        } else if (leftCrossArr.length == 3 && leftCrossArr.every(el => el === "0")) {
            result = "0 win";
        }
    }
    console.log(leftCrossArr)

    let rightCrossArr = [];
    for (let i = 2; i < theInputField.length - 1; i += 2) {
        rightCrossArr.push(theInputField[i]);
        if (rightCrossArr.length == 3 && rightCrossArr.every(el => el == "X")) {
            result = "X win";
        } else if (rightCrossArr.length == 3 && rightCrossArr.every(el => el == "0")) {
            result = "0 win";
        }
    }
    console.log(rightCrossArr);

}


function findWinnerByLine() {
    let lineArr = [];
    let line;
    for (line = 0; line < theInputField.length; line += 3) {
        for (let i = line; i < line + 3; i++) {
            lineArr.push(theInputField[i]);
            if (lineArr.length == 3 && lineArr.every(el => el == "X")) {
                result = "X win";
            } else if (lineArr.length == 3 && lineArr.every(el => el == "0")) {
                result = "0 win";
            }
        }
        console.log(lineArr);
        lineArr = [];
    }

}


function findWinnerByColumn() {
    let column;
    let columnArr = [];
    for (column = 0; column < 3; column++) {
        for (let i = column; i < theInputField.length; i += 3) {
            columnArr.push(theInputField[i]);
            if (columnArr.length == 3 && columnArr.every(el => el == "X")) {
                result = "X win";
            } else if (columnArr.length == 3 && columnArr.every(el => el == "0")) {
                result = "0 win";
            }

        }
        console.log(columnArr);
        columnArr = [];
    }
}


/* */



callPrompt();
addInGameBox(theInputField);


if (result.length == 0) {
    findWinnerByCross();
}
if (result.length == 0) {
    findWinnerByLine();
}
if (result.length == 0) {
    findWinnerByColumn();
}



console.log(theInputField);
console.log(result);