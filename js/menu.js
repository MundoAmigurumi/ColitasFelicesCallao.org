// Lista de mascotas (cambia los nombres). Fotos: imagenes/mascotas/mascota1.jpg, mascota2.jpg ...
const nombres = ["Max","Luna","Dusty","Nala","Rocky","Mía","Simba","Coco","Bruno","Lola",
                 "Thor","Kira","Rex","Canela","Duke","Pelusa","Zeus","Bella","Chispa","Oreo"];

// 1. MENÚ: se dibuja dentro de <div id="menu"> para no repetirlo en cada página
function crearMenu() {
    const contenedor = document.getElementById("menu");
    contenedor.innerHTML = `
        <div class="menu" id="barra-menu">
            <img src="imagenes/logo.png" class="logo" alt="Logo Colitas Felices Callao">
            <button class="boton-menu" id="boton-menu">☰</button>
            <div class="enlaces" id="enlaces">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="quienesSomos.html">Quienes somos</a></li>
                    <li><a href="colitasFelices.html">Colitas Felices</a></li>
                    <li><a href="iniciosesion.html">Iniciar sesión</a></li>
                    <li><a href="contactanos.html">Contáctanos</a></li>
                </ul>
            </div>
        </div>`;

    // Marca en naranja el enlace de la página donde estás
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";
    const enlaces = document.querySelectorAll("#enlaces a");
    for (const enlace of enlaces) {
        if (enlace.getAttribute("href") === paginaActual) enlace.classList.add("activo");
    }

    // En celular: el botón ☰ muestra u oculta los enlaces
    document.getElementById("boton-menu").onclick = function () {
        document.getElementById("enlaces").classList.toggle("abierto");
    };

    // El menú se oscurece cuando bajas la página
    window.onscroll = function () {
        document.getElementById("barra-menu").classList.toggle("menu-oscuro", window.scrollY > 10);
    };
}

// 2. REDES SOCIALES: siempre en el pie; en Inicio también una barra a la derecha
// Cambia los enlaces por los de Colitas Felices Callao
function crearRedes() {
    const redes = [
        { nombre: "TikTok",   imagen: "tiktok.png",   enlace: "https://www.tiktok.com/" },
        { nombre: "YouTube",  imagen: "youtube.png",  enlace: "https://www.youtube.com/" },
        { nombre: "Facebook", imagen: "facebook.png", enlace: "https://www.facebook.com/" },
        { nombre: "WhatsApp", imagen: "whatsapp.png", enlace: "https://wa.me/51999999999" }
    ];

    let iconos = "";
    for (const red of redes) {
        iconos += `<a href="${red.enlace}" target="_blank" aria-label="${red.nombre}">
                       <img src="imagenes/${red.imagen}" alt="${red.nombre}"></a>`;
    }

    const pie = document.getElementById("pie");
    pie.innerHTML += `<div class="redes-pie">${iconos}</div>`;

    if (document.body.id === "inicio") {
        document.body.innerHTML += `<div class="redes-lateral">${iconos}</div>`;
    }
}

// 3. CARRUSEL (Inicio): crea una tarjeta por mascota y activa las flechas
function crearCarrusel() {
    const pista = document.getElementById("pista");
    if (!pista) return;

    for (let i = 0; i < nombres.length; i++) {
        pista.innerHTML += `
            <div class="tarjeta">
                <img src="imagenes/mascotas/mascota${i + 1}.jpg" alt="${nombres[i]}">
                <h3>${nombres[i]}</h3>
            </div>`;
    }
    document.getElementById("flecha-izq").onclick = function () { pista.scrollBy({ left: -260, behavior: "smooth" }); };
    document.getElementById("flecha-der").onclick = function () { pista.scrollBy({ left: 260, behavior: "smooth" }); };
}

// 4. COLITAS FELICES: muestra todas las historias
function crearColitasFelices() {
    const galeria = document.getElementById("galeria");
    if (!galeria) return;

    for (let i = 0; i < nombres.length; i++) {
        galeria.innerHTML += `
            <div class="historia">
                <img src="imagenes/mascotas/mascota${i + 1}.jpg" alt="${nombres[i]}">
                <h3>${nombres[i]}</h3>
                <p>Escribe aquí la historia de ${nombres[i]} y cómo llegó a su hogar.</p>
            </div>`;
    }
}

// 5. CONTRASEÑA: mostrar u ocultar
function verClave(idClave, idIcono) {
    const clave = document.getElementById(idClave);
    const icono = document.getElementById(idIcono);
    if (clave.type === "password") {
        clave.type = "text";
        icono.src = "imagenes/ojo-abierto.png";
    } else {
        clave.type = "password";
        icono.src = "imagenes/ojo-cerrado.png";
    }
}

// 6. REGISTRO: revisa que las dos contraseñas sean iguales
function validarClaves() {
    if (document.getElementById("clave").value !== document.getElementById("confirmarclave").value) {
        alert("Las contraseñas no coinciden.");
        return false;
    }
    return true;
}

// Al cargar la página se ejecuta todo (las funciones se saltan solas si su sección no existe)
// Nota: crearRedes va primero porque reescribe el body en Inicio
window.onload = function () {
    crearRedes();
    crearMenu();
    crearCarrusel();
    crearColitasFelices();
};
