let input = document.getElementById("input");

function myFunc() {
    return Function("return " + input.value)(); 
}
