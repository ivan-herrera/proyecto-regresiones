/**
 * Proyecto de Analisis de Tecnicas Numericas
 */

/* Inicialización de Muuri*/
const grid = new Muuri('.grid', {
    layout: {
        rounding: true
    }
});

Swal.fire({
    title: 'Bienvenidos!',
    text: '',
    html: `
            <p style:"font-size=8">Antes de comenzar, te invitamos a tener en cuenta las siguientes recomendaciones:</p>
            <hr>
            <strong>Ingreso de datos</strong>
            <hr>
            <ul style="list-style-type: none; ">
                <li>Para  decimales como: <em>3,6</em> => <em>3.6<em> </li>
           </ul> `,
    imageUrl: 'assets/img/image.jpg',
    imageWidth: 500,
    imageHeight: 360,
    imageAlt: 'Custom image',
  })

/* Barra de busqueda */
window.addEventListener('load', () =>{
    document.getElementById('grid').classList.add('imagenes-cargadas');

    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;

        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda));
    })

    
});

/* Agregar inputs dinamicamente (x,y) */
function addInput(){
    var textBoxX = document.createElement('input');
    textBoxX.type = 'text';
    textBoxX.setAttribute('name', 'x');
    textBoxX.setAttribute('placeholder', 'Value X');

    var textBoxY = document.createElement('input');
    textBoxY.type = 'text';
    textBoxY.setAttribute('name', 'y');
    textBoxY.setAttribute('placeholder', 'Value Y');

    var divInputX = document.createElement('div');
    divInputX.setAttribute('class', 'x_and_y');

    var divInputY = document.createElement('div');
    divInputY.setAttribute('class', 'x_and_y');

    divInputX.appendChild(textBoxX);
    divInputY.appendChild(textBoxY);

    var divContenedor = document.getElementById('contenedor');
    divContenedor.appendChild(divInputX);
    divContenedor.appendChild(divInputY);
}

