let items = document.querySelectorAll(".gameBoxItem");
let h2 = document.querySelector("h2");
let replay = document.querySelector("#replay")


let theInputField = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
];


let stepPlayer1 = [];
let stepPlayer2 = [];

let result = "";
let flag = 0;


// let secondFlag = []



function playerStep(el) {
    if (flag == 0) {
        stepPlayer1.push(Number(el.id));
        flag += 1;
        console.log("step1 = " + stepPlayer1);
    } else if (flag == 1) {
        stepPlayer2.push(Number(el.id));
        flag -= 1;
        console.log("step2 = " + stepPlayer2);
    }
}




// function playerStep() {
//     for (let i = 0; i < 5; i++) {
//         let player1_index = Number(prompt("Go X"));
//         let player2_index = Number(prompt("Go 0"));

//         stepPlayer1.push(player1_index);
//         stepPlayer2.push(player2_index);
//     }
// }


function addInGameBox() {
    for (let i = 0; i < theInputField.length; i++) {
        if (stepPlayer1.includes(theInputField[i])) {
            theInputField[i] = "X";
        }
        if (stepPlayer2.includes(theInputField[i])) {
            theInputField[i] = "0";
        }
    }
    console.log(theInputField);
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
    // console.log(leftCrossArr)

    let rightCrossArr = [];
    for (let i = 2; i < theInputField.length - 1; i += 2) {
        rightCrossArr.push(theInputField[i]);
        if (rightCrossArr.length == 3 && rightCrossArr.every(el => el == "X")) {
            result = "X win";
        } else if (rightCrossArr.length == 3 && rightCrossArr.every(el => el == "0")) {
            result = "0 win";
        }
    }
    // console.log(rightCrossArr);

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
        // console.log(lineArr);
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
        // console.log(columnArr);
        columnArr = [];
    }
}

function displayXor0(element) {
    if (theInputField[element.id - 1] == "X") {
        element.textContent = "X";
    } else if (theInputField[element.id - 1] == "0") {
        element.textContent = "0";
    } else {
        element.textContent = "";
    }
}

function replayBtn() {
    replay.addEventListener("click", () => {
        theInputField = [
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
        ];
        stepPlayer1 = [];
        stepPlayer2 = [];
        leftCrossArr = [];
        rightCrossArr = [];
        lineArr = [];
        columnArr = [];

        items.forEach(el => {
            el.textContent = "";
        })
        console.log("clear = " + theInputField);
    })
}

replayBtn();


/* */
items.forEach(el => {
    elId = el.id;
    el.addEventListener("click", () => {

        // if (!secondFlag.includes(elId)) {
        //     playerStep(el);
        //     addInGameBox();
        // }

        if (theInputField[el.id - 1] == "X" || theInputField[el.id - 1] == "0") {
            return;
        } else {
            playerStep(el);
            addInGameBox();
        }


        //check result then function
        if (result.length == 0) {
            findWinnerByCross();
        }
        if (result.length == 0) {
            findWinnerByLine();
        }
        if (result.length == 0) {
            findWinnerByColumn();
        }

        displayXor0(el);

        console.log(result);
        h2.textContent = result;
    })
})



console.log(theInputField);