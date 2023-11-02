// Objetivo: Filtrar las tarjetas por rareza y colección
var filtrosRareza = document.querySelectorAll(".filtro-rareza");
var filtrosColeccion = document.querySelectorAll(".filtro-coleccion");
var filtrosStatus = document.querySelectorAll(".filtro-status");
function filtrarTarjetas() {
    var rarezasSeleccionadas = [];
    var coleccionesSeleccionadas = [];
    var statusSeleccionadas = [];
    filtrosRareza.forEach(function(filtro) {
        if (filtro.checked && filtro.value !== "ALLRAREZA") rarezasSeleccionadas.push(filtro.value);
    });
    filtrosColeccion.forEach(function(filtro) {
        if (filtro.checked && filtro.value !== "Allcoleccion") coleccionesSeleccionadas.push(filtro.value);
    });
    filtrosStatus.forEach(function(filtro) {
        if (filtro.checked && filtro.value !== "Allstatus") statusSeleccionadas.push(filtro.value);
    });
    var tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(function(tarjeta) {
        var rarezaTarjeta = tarjeta.getAttribute("data-rareza");
        var coleccionTarjeta = tarjeta.getAttribute("data-coleccion");
        var statusTarjeta = tarjeta.getAttribute("data-status");
        var rarezaFiltro = rarezasSeleccionadas.length === 0 || rarezasSeleccionadas.includes(rarezaTarjeta);
        var coleccionFiltro = coleccionesSeleccionadas.length === 0 || coleccionesSeleccionadas.includes(coleccionTarjeta);
        var statusFiltro = statusSeleccionadas.length === 0 || statusSeleccionadas.includes(statusTarjeta);
        if (rarezaFiltro && coleccionFiltro && statusFiltro) tarjeta.style.display = "block";
        else tarjeta.style.display = "none";
    });
}
document.addEventListener("DOMContentLoaded", function() {
    var filtroRareza = document.getElementById("rareza");
    var filtroRarezaCheckboxes = document.getElementById("filtro-rareza-checkboxes");
    var filtroColeccion = document.getElementById("coleccion");
    var filtroColeccionCheckboxes = document.getElementById("filtro-coleccion-checkboxes");
    var filtroStatus = document.getElementById("status");
    var filtroStatusCheckboxes = document.getElementById("filtro-status-checkboxes");
    filtroRareza.addEventListener("click", function() {
        filtroRarezaCheckboxes.style.display = filtroRarezaCheckboxes.style.display === "none" ? "block" : "none";
    });
    filtrosRareza.forEach(function(filtro) {
        filtro.addEventListener("change", function() {
            filtrarTarjetas();
        });
    });
    filtroColeccion.addEventListener("click", function() {
        filtroColeccionCheckboxes.style.display = filtroColeccionCheckboxes.style.display === "none" ? "block" : "none";
    });
    filtrosColeccion.forEach(function(filtro) {
        filtro.addEventListener("change", function() {
            filtrarTarjetas();
        });
    });
    filtroStatus.addEventListener("click", function() {
        filtroStatusCheckboxes.style.display = filtroStatusCheckboxes.style.display === "none" ? "block" : "none";
    });
    filtrosStatus.forEach(function(filtro) {
        filtro.addEventListener("change", function() {
            filtrarTarjetas();
        });
    });
    filtrarTarjetas();
});
document.getElementById("resetButton").addEventListener("click", function() {
    // Desmarca todos los checkboxes de rareza
    filtrosRareza.forEach(function(filtro) {
        filtro.checked = false;
    });
    // Desmarca todos los checkboxes de colección
    filtrosColeccion.forEach(function(filtro) {
        filtro.checked = false;
    });
    // Desmarca todos los checkboxes de status
    filtrosStatus.forEach(function(filtro) {
        filtro.checked = false;
    });
    // Ejecuta la función de filtrar tarjetas para aplicar los cambios
    filtrarTarjetas();
});

//# sourceMappingURL=collection.a7103602.js.map
