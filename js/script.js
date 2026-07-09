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
