let operand_1 = document.querySelector("[data-operand-1]");
let operand_2 = document.querySelector("[data-operand-2]");
let btnN = document.querySelectorAll("[data-number]");
let btnO = document.querySelectorAll("[data-operator]");

btnN.forEach((button) => button.addEventListener("click", () => appendNumber(button.textContent)));
btnO.forEach((button) => button.addEventListener("click", () => symbolElement(button.textContent)));

function appendNumber(number) {
  if (operand_2.textContent === "0") {
    operand_2.textContent = "";
  }
  operand_2.textContent += number;
}
function symbolElement(symbol) {
  if (symbol === "C") {
    if (operand_2.textContent.length === 1) {
      operand_2.textContent = 0;
    } else {
      operand_2.textContent = operand_2.textContent.slice(0, -1);
    }
  }
  if (symbol === "AC") {
    operand_2.textContent = 0;
  }
  if (symbol === "=") {
    let separador = /[-+*%\/]/;
    let operacion = operand_2.textContent.split(separador);
    operand_2.textContent = operacion.reduce(
      (acumulator, currentValue) => +acumulator + +currentValue
    );
  }
}
