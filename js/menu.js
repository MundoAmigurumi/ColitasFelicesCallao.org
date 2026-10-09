// js/menu.js

// Inserta los estilos del menú en el <head> de la página
function agregarEstilosMenu() {
    const estilos = `
        .banner {
            position: relative;
        }

        .menu {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;

            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 20px; /* Antes: 10px 20px */

            background: rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(4px);

            z-index: 10;
            transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .menu-con-sombra {
            background: rgba(0, 0, 0, 0.6);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .logo {
            width: 90px; /* Antes: 110px */
            height: auto;
        }

        .navegacion-barra ul {
            display: flex;
            align-items: center;
            gap: 12px; /* Antes: 15px */
        }

        .navegacion-barra ul li a {
            font-size: 14px; /* Antes: 16px */
            color: white;
            font-weight: 600;
            padding: 5px 8px; /* Antes: 6px 10px */
            transition: color 0.3s ease;
        }

        .navegacion-barra ul li a:hover {
            color: goldenrod;
        }

        .navegacion-barra ul li a.activo {
            color: goldenrod;
            border-bottom: 2px solid goldenrod;
        }

        .menu-icono {
            display: none;
            font-size: 22px; /* Antes: 24px */
            cursor: pointer;
            color: white;
        }

        @media (max-width: 768px) {
            .menu-icono {
                display: block;
            }

            .navegacion-barra {
                display: none;
                width: 100%;
                background: rgba(0, 0, 0, 0.8);
            }

            .navegacion-barra ul {
                flex-direction: column;
                align-items: flex-start;
            }

            .navegacion-barra.menu-abierto {
                display: block;
            }
        }
    `;

    const etiquetaStyle = document.createElement("style");
    etiquetaStyle.textContent = estilos;
    document.head.appendChild(etiquetaStyle);
}

// Crea el HTML del menú y lo coloca dentro de #menu-container
function crearMenu() {
    const contenedor = document.getElementById("menu-container");

    if (!contenedor) return;

    contenedor.innerHTML = `
        <div class="menu contenedor">
            <img src="imagenes/logo_2.png" class="logo" alt="Logo Mundo Amigurumi">

            <div class="menu-icono" id="menu-icono">☰</div>

            <nav class="navegacion-barra" id="navegacion-barra">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="quienesSomos.html">Quienes somos</a></li>
                    <li><a href="galeria.html">Catálogo</a></li>
                    <li><a href="iniciosesion.html">Iniciar sesión</a></li>
                    <li><a href="contactanos.html" target="_blank">Contáctanos</a></li>
                </ul>
            </nav>
        </div>
    `;

    marcarPaginaActiva();
    activarMenuMovil();
    activarSombraAlScroll();
}

// Resalta el link de la página en la que estamos
function marcarPaginaActiva() {
    const paginaActual = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".navegacion-barra ul li a");

    links.forEach(link => {
        if (link.getAttribute("href") === paginaActual) {
            link.classList.add("activo");
        }
    });
}

// Abre y cierra el menú en móvil al hacer clic en el ícono ☰
function activarMenuMovil() {
    const icono = document.getElementById("menu-icono");
    const navegacion = document.getElementById("navegacion-barra");

    icono.addEventListener("click", () => {
        navegacion.classList.toggle("menu-abierto");
    });
}

// Agrega sombra/fondo más oscuro al menú cuando el usuario baja la página
function activarSombraAlScroll() {
    const menu = document.querySelector(".menu");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            menu.classList.add("menu-con-sombra");
        } else {
            menu.classList.remove("menu-con-sombra");
        }
    });
}

// Punto de entrada: se ejecuta cuando el HTML ya está listo
document.addEventListener("DOMContentLoaded", () => {
    agregarEstilosMenu();
    crearMenu();
});

function verClave(idClave, idIcono) {

    let clave = document.getElementById(idClave);
    let icono = document.getElementById(idIcono);

    if (clave.type === "password") {

        clave.type = "text";
        icono.src = "imagenes/ojo-abierto.png";

    } else {

        clave.type = "password";
        icono.src = "imagenes/ojo-cerrado.png";

    }
}
