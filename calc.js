let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");

let clear = document.querySelector(".clear");

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");

let oper = document.querySelectorAll(".operator");
let inp = document.querySelector("input");
let equal = document.querySelector(".equal-to");

//numbers
one.addEventListener("click", function () {
    inp.value += "1";
});
two.addEventListener("click", function () {
    inp.value += "2";
});
three.addEventListener("click", function () {
    inp.value += "3";
});
four.addEventListener("click", function () {
    inp.value += "4";
});
five.addEventListener("click", function () {
    inp.value += "5";
});
six.addEventListener("click", function () {
    inp.value += "6";
});
seven.addEventListener("click", function () {
    inp.value += "7";
});
eight.addEventListener("click", function () {
    inp.value += "8";
});
nine.addEventListener("click", function () {
    inp.value += "9";
});

//operators
plus.addEventListener("click", function () {
    inp.value += "+";
});
minus.addEventListener("click", function () {
    inp.value += "-";
});
multiply.addEventListener("click", function () {
    inp.value += "*";
});
divide.addEventListener("click", function () {
    inp.value += "/";
});

clear.addEventListener("click", function () {
    inp.value = "";
});

// ... (Previous code remains the same) ...

equal.addEventListener("click", function () {
    try {
        const result = math.evaluate(inp.value);
        inp.value = result;
    } catch (error) {
        // Handle errors here (if any)
        inp.value = "Error";
    }
});
