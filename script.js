// selectores
const preguntaElement = document.getElementById("pregunta");
const respuestaElement = document.getElementById("respuesta");
const btnChiste = document.getElementById("btn-chiste");

// chistes
const chistes = [
    {
        pregunta: "¿Cómo se llama el campeón de buceo japonés?",
        respuesta: "Tokofondo."
    },
    {
        pregunta: "¿Por qué estás pensando tanto en matemáticas?",
        respuesta: "Porque tengo muchos problemas."
    },
    {
        pregunta: "¿Cuál es el animal más antiguo?",
        respuesta: "La cebra, ¡porque está en blanco y negro!"
    },
    {
        pregunta: "¿Cómo se llama el campeón de ajedrez más rápido del mundo?",
        respuesta: "¡Jaquemate!"
    },
    {
        pregunta: "¿Por qué los pájaros no usan Facebook?",
        respuesta: "Porque ya tienen Twitter."
    }
];

// generador de chistes aleatorios
function obtenerChisteAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * chistes.length);
    return chistes[indiceAleatorio];
}

// oyente de evento
btnChiste.addEventListener("click", function () {
    const chisteAleatorio = obtenerChisteAleatorio();

    // Agregamos la clase "fade-in-out" a los elementos de pregunta y respuesta
    preguntaElement.classList.add("fade-in-out");
    respuestaElement.classList.add("fade-in-out");

    // Esperamos un breve momento para que se aplique la animación
    setTimeout(function () {
        // Cambiamos el contenido de pregunta y respuesta
        preguntaElement.textContent = chisteAleatorio.pregunta;
        respuestaElement.textContent = chisteAleatorio.respuesta;

        // Removemos la clase "fade-in-out" para poder volver a aplicar la animación
        preguntaElement.classList.remove("fade-in-out");
        respuestaElement.classList.remove("fade-in-out");
    }, 2000); // El tiempo debe coincidir con la duración de la animación CSS (2 segundos en este caso)
});