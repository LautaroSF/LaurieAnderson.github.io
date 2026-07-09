// Selecciono la ID del boton correspondiente.
let btn1 = document.querySelector('#btn-dato');
let contador = 0; // Creo una variable para contar los clicks.

btn1.addEventListener('click', function() {
    contador++; // Se suma 1 al contador cada vez que clickeamos.

    switch(contador) {
        case 1:
            alert('Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo.');
            break; // Agrego un break para pasar al siguiente dato curioso.
        case 2:
            alert('Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido.');
            break;
        case 3:
            alert('Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores.');
            break;
        case 4:
            alert('Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.');
            break;
        case 5:
            alert('En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.');
            break;
        case 6:
            alert('Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017.');
            break;
        case 7:
            alert('Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras.');
            break;
        case 8:
            alert('Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala.');
            break;
        case 9:
            alert('Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía.');
            break;
        case 10:
            alert('Sigue siendo una figura activa e influyente en el arte digital y ha experimentado con inteligencia artificial en proyectos recientes.');
            break;
		default:
            contador = 0; // Reset de los datos.
    }
});

// Selecciono la ID del boton correspondiente.
let bt2 = document.querySelector('#btn-tema');
let temaActual = 1; // Creo una variable para el color actual de la pagina.

bt2.addEventListener('click', function() {

    if (temaActual === 1) {
		// Tema de fondo oscuro y letras blancas.
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        
        temaActual = 2;

    } else if (temaActual === 2) {
        // Tema de fondo blanco y letras negras.
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        
        temaActual = 3;

    } else if (temaActual === 3) {
        // Tema de fondo azul y letras amarillas.
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "yellow";
        
        temaActual = 1;   // Vuelve al primero
    }

});

// Hago un array de objetos sobre las diferentes obras.
// Pongo el titulo correspondiente y el src de donde sacaran la imagen.
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

// Selecciono la ID del contenedor donde las imagenes de las obras van a ser desplegadas.
let contenedor = document.querySelector("#galeria-obras");

// El codigo recorre el array y va generando las imagenes a la galeria.
// Las variables se van sumando hasta llegar al maximo solicitado.

for (let i = 0; i < obras.length; i++) {
	
	let tarjeta = '<div><p>' + obras[i].titulo + '<br>';
	tarjeta += '<img src="'+ obras[i].imagen +'" alt="' + obras[i].titulo + '">'
	tarjeta += '</p></div>';
	
	contenedor.innerHTML += tarjeta;
}
