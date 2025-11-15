function calcular_imc() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado;
    let IMC;

    console.log("num1:", num1, "num2:", num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ingrese un número válido");
        return;
    }
        resultado = num2 !== 0 ? num1 / (num2*num2) : "Error: altura no puede ser 0";

    if (resultado<18.5){
        IMC="Bajo peso";
    }
    else{
        if (resultado>=18.5 && resultado<25){
            IMC="Peso normal";
        }
        else{
            if (resultado>=25 && resultado<30){
                IMC="Sobrepeso";
            }
            else{
                IMC="Obesidad";
            }
        }
    }

    document.getElementById("resultado").textContent = resultado;
    document.getElementById("IMC").textContent = IMC;
    
}