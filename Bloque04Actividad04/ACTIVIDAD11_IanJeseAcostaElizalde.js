document.getElementById("registroForm").addEventListener("submit", function(event) {
    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById("confirmarContrasena").value;
    const telefono = document.getElementById("telefono").value;

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden.");
        event.preventDefault();
        return;
    }

    const telRegex = /^[0-9]{10,}$/;
    if (!telRegex.test(telefono)) {
        alert("Por favor, introduzca un número de teléfono válido (mínimo 10 dígitos).");
        event.preventDefault();
        return;
    }

    alert("Registro completado con éxito ✅");
});
