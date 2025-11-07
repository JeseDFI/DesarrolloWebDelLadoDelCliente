document.getElementById("addButton").onclick = validateForm;
document.getElementById("calculateButton").onclick = calculateTotal;

function getValueFromElement(id) {
    return document.getElementById(id).value;
}

function isElementChecked(id) {
    return document.getElementById(id).checked;
}

function resetAllErrors() {
    var inputs = document.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("error");
    }
}

function checkPasswordLength(pass) {
    if (pass.length < 8) {
    return false;
    }
    return true;
}

function checkPhonePattern(phone) {
    var phonePattern = /^\d{3}\s\d{2}\s\d{2}\s\d{2}$/;
    return phonePattern.test(phone);
}

function validateForm() {
    resetAllErrors();
    var isValid = true;

    var name = getValueFromElement("name");
    var password = getValueFromElement("password");
    var phone = getValueFromElement("phone");
    var terms = isElementChecked("terms");

    if (name === "") {
    document.getElementById("name").classList.add("error");
    isValid = false;
    }
  
    var isPasswordValid = checkPasswordLength(password);
    if (!isPasswordValid) {
    document.getElementById("password").classList.add("error");
    isValid = false;
    }

    var isPhoneValid = checkPhonePattern(phone);
    if (!isPhoneValid) {
    document.getElementById("phone").classList.add("error");
    isValid = false;
    }

    if (!terms) {
    document.getElementById("terms").classList.add("error");
    isValid = false;
    }

    if (isValid) {
    alert("Cuenta creada con éxito");
    } else {
    alert("Errores en el formulario. Por favor, revísalos.");
    }
}

function calculateTotal() {
    var priceInput = document.getElementById("price");
    var priceString = priceInput.value;

    var pricePattern = /^\d+(\.\d{1,2})?$/;

    if (!pricePattern.test(priceString)) {
    alert("El precio debe ser un número con hasta dos decimales (ej: 25.50)");
    priceInput.classList.add("error");
    setResultValue("");
    return;
    }
  
    priceInput.classList.remove("error");

    var basePrice = parseFloat(priceString);
    var vatValue = parseFloat(getValueFromElement("vatOption"));

    var total = calculateWithVat(basePrice, vatValue);
  
    setResultValue(total.toFixed(2));
}

function calculateWithVat(price, vat) {
    var vatAmount = (price * vat) / 100;
    return price + vatAmount;
}

function setResultValue(value) {
    document.getElementById("result").value = value;
}