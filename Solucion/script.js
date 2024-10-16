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

// Función para cambiar la casa
function changeHouse(casa) {
    const body = document.body;
    const CasaImagen = document.getElementById('CasaImagen');
    const lema = document.getElementById('lema');

    // Desestructuración del objeto según la casa
    const { imagen, lema: CasaLema } = casas[casa];

    // Cambia la clase del cuerpo
    body.className = casa; 

    // Cambia la imagen y el lema según la casa seleccionada
    CasaImagen.src = imagen;
    lema.textContent = CasaLema;

    // Guardar la casa seleccionada en localStorage
    localStorage.setItem('selectedHouse', casa);
}

// Al cargar la página, establecer la casa guardada en localStorage
window.onload = function() {
    const savedHouse = localStorage.getItem('selectedHouse');
    if (savedHouse) {
        document.body.className = savedHouse; // Cambiar la clase según la casa guardada
        changeHouse(savedHouse); // Cambiar la imagen y el lema de la casa
    }
};
