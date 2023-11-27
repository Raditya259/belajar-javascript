/* 
Conditional Statements Syntax
Sumber : https://www.w3schools.com/js/js_if_else.asp

if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
} else {
    block of code to be executed if the condition1 is false and condition2 is false
}
*/

let nilai = 65;

if (nilai > 90) {
    console.log("nilai anda A");
} else if (nilai > 80) {
    console.log("nilai anda B");
} else if (nilai > 60) {
    console.log("nilai anda C");
} else if (nilai > 40) {
    console.log("nilai anda D");
} else {
    console.log("nilai anda E");
}


/*
Switch Case Statement Syntax
Sumber : https://www.w3schools.com/js/js_if_else.asp

switch(expression) {
    case x:
    // code block
    break;

    case y:
    // code block
    break;

    default:
    // code block
}
*/

let number = 3
switch (number) {
    case 0:
        console.log("angka anda 0");
        break;
    case 1:
        console.log("angka anda 1");
        break;
    case 2:
        console.log("angka anda 2");
        break;
    case 3:
        console.log("angka anda 3");
        break;
    case 4:
        console.log("angka anda 4");
        break;
    case 5:
        console.log("angka anda 5");
        break;
    case 6:
        console.log("angka anda 6");
}