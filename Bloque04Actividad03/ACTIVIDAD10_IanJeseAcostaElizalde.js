function calcular_gasto_total() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let resultado;

    console.log("num1:", num1, "num2:", num2, "num3:", num3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Ingrese un número válido");
        return;
    }

    resultado = num1 + num2 + num3;

    document.getElementById("resultado").textContent = resultado;
    
}