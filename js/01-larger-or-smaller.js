//PROMPT USER FOR SOME NUMBERS
let int1 = prompt("Tell me a number - any number");
let int2 = prompt("Tell me another number");

//COMPARE THE NUMBERS AND TELL USER WHICH WAS LARGER
if (int1 > int2) {
    document.write(`<center>You entered two numbers: <strong>"${int1}"</strong> was greater than "${int2}"</center>`)
} else if
    (int1 < int2) {
        document.write(`<center>You entered two numbers: <strong>"${int2}"</strong> was greater than "${int1}"</center>`)
} else {
    document.write(`<center>You entered two numbers: "${int2}" & "${int1}" are <i>equal</i> to each other</center>`)
}