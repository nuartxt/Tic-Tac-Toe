let theInputField = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
];







/* */

let player1arr = [];
let player2arr = [];

for (let i = 0; i < 5; i++) {
    let player1_index = Number(prompt("Go X"));
    let player2_index = Number(prompt("Go Y"));

    player1arr.push(player1_index);
    player2arr.push(player2_index);
}





for (let i = 0; i < theInputField.length; i++) {
    if (player1arr.includes(theInputField[i])) {
        theInputField[i] = "X";
    }
    if (player2arr.includes(theInputField[i])) {
        theInputField[i] = "0";
    }
}

/**/








// let player1_index = Number(prompt())
// let player2_index = Number(prompt())



// for (let i = 0; i < theInputField.length; i++) {
//     if (theInputField[i] == player1_index) {
//         theInputField[i] = "X";
//     }
//     if (theInputField[i] == player2_index) {
//         theInputField[i] = "0";
//     }
// }





console.log(theInputField);

