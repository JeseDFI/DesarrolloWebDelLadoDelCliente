document.addEventListener('DOMContentLoaded', () => {

    const companyForm = document.getElementById('companyForm');
    const companyList = document.getElementById('companyList');

    companyForm.addEventListener('submit', (event) => {

        event.preventDefault();

        const folio = document.getElementById('folio').value;
        const nombre = document.getElementById('nombre').value;
        const domicilio = document.getElementById('domicilio').value;

        const li = document.createElement('li');

        li.innerHTML = `
            <strong>Folio:</strong> ${folio} <br>
            <strong>Nombre:</strong> ${nombre} <br>
            <strong>Domicilio:</strong> ${domicilio}
        `;

        companyList.appendChild(li);

        companyForm.reset();
        
        document.getElementById('folio').focus();
    });

});