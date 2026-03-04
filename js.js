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



callPrompt();


function addInGameBox() {
    for (let i = 0; i < theInputField.length; i++) {
        if (stepPlayer1.includes(theInputField[i])) {
            theInputField[i] = "X";
        }
        if (stepPlayer2.includes(theInputField[i])) {
            theInputField[i] = "0";
        }
    }
}
// addInGameBox();




console.log(theInputField);

