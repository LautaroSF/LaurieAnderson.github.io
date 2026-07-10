// ==========================================
// 1. FUNCIONALIDAD: DATO CURIOSO AL AZAR
// ==========================================

// Selecciono el botón correspondiente.
let btnDato = document.querySelector('#btn-dato');

// Hago un array con los datos curiosos para poder elegir uno de forma aleatoria.
let datosCuriosos = [
    'Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología...',
    'Su tema O Superman se convirtió en un éxito inesperado en 1981...',
    'Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales...',
    'Ha colaborado con artistas como Lou Reed, con quien estuvo casada...',
    'En 2002 fue nombrada la primera artista residente de la NASA...',
    'Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva...',
    'Utiliza su propia voz alterada digitalmente como herramienta narrativa...',
    'Ha creado instalaciones multimedia que combinan texto, imagen y sonido...',
    'Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía.',
    'Sigue siendo una figura activa e influyente en el arte digital...'
];

btnDato.addEventListener('click', function() {
    // Genero un número al azar entre 0 y el total de datos disponibles
    let numeroAzar = Math.floor(Math.random() * datosCuriosos.length);
    
    // Muestro el dato aleatorio en un alert
    alert(datosCuriosos[numeroAzar]);
});


// ==========================================
// 2. FUNCIONALIDAD: CAMBIO DE DISEÑO (TEMA)
// ==========================================

let btnTema = document.querySelector('#btn-tema');
// Selecciono el div principal para cambiar su fondo sin afectar el fondo con imagen del Body
let contenedor = document.querySelector('.contenedor'); 
let temaActual = 1;

btnTema.addEventListener('click', function() {
    if (temaActual === 1) {
        // Tema oscuro
        contenedor.style.backgroundColor = "#222";
        contenedor.style.color = "#eee";
        temaActual = 2;

    } else if (temaActual === 2) {
        // Tema alternativo azulado
        contenedor.style.backgroundColor = "#e0f0ff";
        contenedor.style.color = "#003366";
        temaActual = 3;

    } else if (temaActual === 3) {
        // Tema de fondo blanco y letras negras (Por defecto)
        contenedor.style.backgroundColor = "#ffffff";
        contenedor.style.color = "#333333";
        temaActual = 1; 
    }
});


// ==========================================
// 3. FUNCIONALIDAD: GALERÍA GENERADA CON JS
// ==========================================

let obras = [
    {
        titulo: 'O Superman (1981)',
        imagen: '../materiales-tema2/O-Superman.jpg'
    },
    {
        titulo: 'Big Science (1982)',
        imagen: '../materiales-tema2/BigScience.jpg'
    },
    {
        titulo: 'United States Live (1984)',
        imagen: '../materiales-tema2/UnitedStatesLive.jpg'
    },
    {
        titulo: 'Home of the Brave (1986)',
        imagen: '../materiales-tema2/Home-of-the-Brave.jpg'
    },
    {
        titulo: 'Bright Red (1994)',
        imagen: '../materiales-tema2/BrightRed.jpg'
    }
];

// Selecciono la ID del contenedor donde las imágenes van a ser desplegadas.
let contenedorGaleria = document.querySelector("#galeria-obras");

// Recorro el array inyectando el HTML
for (let i = 0; i < obras.length; i++) {
    let tarjeta = '<div>';
    tarjeta += '<img src="' + obras[i].imagen + '" alt="' + obras[i].titulo + '">';
    tarjeta += '<p>' + obras[i].titulo + '</p>';
    tarjeta += '</div>';
    
    contenedorGaleria.innerHTML += tarjeta;
}
