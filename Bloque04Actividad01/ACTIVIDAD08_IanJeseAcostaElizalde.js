function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;

    console.log("num1:", num1, "num2:", num2, "operacion:", operacion);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ingrese un número válido");
        return;
    }

    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero";
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById("resultado").textContent = resultado;
}
