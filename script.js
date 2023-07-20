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
    preguntaElement.textContent = chisteAleatorio.pregunta;
    respuestaElement.textContent = chisteAleatorio.respuesta;
});