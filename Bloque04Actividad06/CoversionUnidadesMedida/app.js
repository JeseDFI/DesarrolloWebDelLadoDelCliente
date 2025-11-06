document.addEventListener('DOMContentLoaded', () => {

    const milimetros = document.getElementById('mm');
    const centimetros = document.getElementById('cm');
    const metros = document.getElementById('m');

    const clearIfNaN = (value, ...inputs) => {
        if (isNaN(value) || value === 0) {
            inputs.forEach(input => input.value = '');
            return true;
        }
        return false;
    };

    milimetros.addEventListener('input', () => {
        const mm = parseFloat(milimetros.value);
        if (clearIfNaN(mm, centimetros, metros)) return;

        centimetros.value = (mm / 10).toFixed(2);
        metros.value = (mm / 1000).toFixed(4);
    });

    // 2. Escuchar cambios en Centímetros (cm)
    centimetros.addEventListener('input', () => {
        const cm = parseFloat(centimetros.value);
        if (clearIfNaN(cm, milimetros, metros)) return;

        milimetros.value = (cm * 10).toFixed(2);
        metros.value = (cm / 100).toFixed(4);
    });

    // 3. Escuchar cambios en Metros (m)
    metros.addEventListener('input', () => {
        const m = parseFloat(metros.value);
        if (clearIfNaN(m, milimetros, centimetros)) return;

        milimetros.value = (m * 1000).toFixed(2);
        centimetros.value = (m * 100).toFixed(2);
    });

});