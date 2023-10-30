// Objetivo: Filtrar las tarjetas por rareza y colección
document.addEventListener('DOMContentLoaded', function () {
    var filtroRareza = document.getElementById('rareza');
    var filtroRarezaCheckboxes = document.getElementById('filtro-rareza-checkboxes');
    var filtrosRareza = document.querySelectorAll('.filtro-rareza');

    var filtroColeccion = document.getElementById('coleccion');
    var filtroColeccionCheckboxes = document.getElementById('filtro-coleccion-checkboxes');
    var filtrosColeccion = document.querySelectorAll('.filtro-coleccion');

    filtroRareza.addEventListener('click', function () {
        filtroRarezaCheckboxes.style.display = filtroRarezaCheckboxes.style.display === 'none' ? 'block' : 'none';
    });

    filtrosRareza.forEach(function (filtro) {
        filtro.addEventListener('change', function () {
            filtrarTarjetas();
        });
    });

    filtroColeccion.addEventListener('click', function () {
        filtroColeccionCheckboxes.style.display = filtroColeccionCheckboxes.style.display === 'none' ? 'block' : 'none';
    });

    filtrosColeccion.forEach(function (filtro) {
        filtro.addEventListener('change', function () {
            filtrarTarjetas();
        });
    });

    function filtrarTarjetas() {
        var rarezasSeleccionadas = [];
        var coleccionesSeleccionadas = [];

        filtrosRareza.forEach(function (filtro) {
            if (filtro.checked && filtro.value !== 'ALLRAREZA') {
                rarezasSeleccionadas.push(filtro.value);
            }
        });

        filtrosColeccion.forEach(function (filtro) {
            if (filtro.checked && filtro.value !== 'Allcoleccion') {
                coleccionesSeleccionadas.push(filtro.value);
            }
        });

        var tarjetas = document.querySelectorAll('.tarjeta');
        tarjetas.forEach(function (tarjeta) {
            var rarezaTarjeta = tarjeta.getAttribute('data-rareza');
            var coleccionTarjeta = tarjeta.getAttribute('data-coleccion');

            var rarezaFiltro = rarezasSeleccionadas.length === 0 || rarezasSeleccionadas.includes(rarezaTarjeta);
            var coleccionFiltro = coleccionesSeleccionadas.length === 0 || coleccionesSeleccionadas.includes(coleccionTarjeta);

            if (rarezaFiltro && coleccionFiltro) {
                tarjeta.style.display = 'block';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    }
});
