// write a function to take no 0 to 9 and written in words
function numberToWord(num) {
    switch (num) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            return "Invalid input";
    }
};

// console.log(numberToWord(5));
// create a another function thet take a no. and show in words with the help of  toward function

const rollno = "24567890";
const digits = String(rollno).split("");

console.log(digits);
let inWords ="";
digits.forEach((d) =>{
    inWords += " "+ toWords(Number(d));
});
console.logg(inWords);