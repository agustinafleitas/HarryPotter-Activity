//Consigna actividad:
//Deberan desarrollar el código necesario para que al hacer click en los bótones estos:
    //-Muestren la imagen y lema de la casa seleccionada
    //-Cambién el color del fondo al correspondiente de la casa (los estilos ya estan definidos en CSS)
    //Se guarde la selección en localStorage

    //Pequeñas pistas:
         //Usa desestructuración para extraer imagen y lema del objeto casas.
         //Cambia la clase del body para aplicar estilos correspondientes a la casa.


// Objeto que contiene la información de cada casa
const casas = {
    gryffindor: {
        imagen: 'img/gryffindor.png',
        lema: '¡Valientes y audaces!',
    },
    hufflepuff: {
        imagen: 'img/hufflepuff.png',
        lema: '¡Leales y trabajadores!',
    },
    ravensclaw: {
        imagen: 'img/ravensclaw.png',
        lema: '¡Inteligentes y sabios!',
    },
    slytherin: {
        imagen: 'img/slytherin.png',
        lema: '¡Ambiciosos y astutos!',
    }
};

// Función para cambiar la casa. Recuerden que los botones cuentan con eventos "onClick"
function changeHouse(casa) {
};
