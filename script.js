let input = document.querySelector(".pantalla input");

// Prevent default action of input field on click

input.onclick = function (e) {
    e.preventDefault();
};

// Prevent default action of input on key press
input.onkeypress = function (e) {
    e.preventDefault();
};

// variable para que asignar valores a los botones 
const add = (value) => {
    input.value += value;
};

//  boton AllClear

const allClear = () => {
    input.value = "";
};

// Remove Char 
const removeChar = () => {
    input.value = input.value.slice(0, -1);
};


// Calcular resultado 
const calculate = () => {
    if (!input.value) return;
    // Evalua la expresion usando eval() function
    input.value = eval(input.value);
};