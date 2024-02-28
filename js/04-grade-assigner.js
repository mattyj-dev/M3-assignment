let grade = parseInt(prompt("What score between 1 & 100 did you get?"))
console.log(grade)

if (grade > 100 || grade < 0) {
    console.log('only numbers between 1 & 100 accepted')
}
else if (grade >= 90) {
    console.log('You received an A')
} else if (grade >= 80) {
    console.log('You received an B')
} else if (grade >= 70) {
    console.log('You received an C')
} else if (grade >= 60) {
    console.log('You received an D')
} else if (grade <= 59) {
    console.log('You received a F')
} else {
}