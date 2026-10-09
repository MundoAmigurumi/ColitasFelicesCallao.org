document.addEventListener("DOMContentLoaded", function () {

    const promociones = document.getElementById("promociones");

    if (localStorage.getItem("sesionIniciada") === "true") {

        promociones.style.display = "block";

        // Después de mostrar las promociones,
        // eliminamos la sesión guardada.
        localStorage.removeItem("sesionIniciada");

    } else {

        promociones.style.display = "none";

    }

});