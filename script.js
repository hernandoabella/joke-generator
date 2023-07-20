// selectores
const preguntaElement = document.getElementById("pregunta");
const respuestaElement = document.getElementById("respuesta");
const btnChiste = document.getElementById("btn-chiste");

// chistes
const chistes = [
    {
        pregunta: "¿Cuál es el animal más elegante de la programación?",
        respuesta: "El pavo 'real'."
    },
    {
        pregunta: "¿Qué hace un cocodrilo en un programa?",
        respuesta: "¡Muerde los errores!"
    },
    {
        pregunta: "¿Cuál es el colmo de un programador?",
        respuesta: "Que le dé un ataque de 'cookies'."
    },
    {
        pregunta: "¿Por qué un programador es siempre el más buscado?",
        respuesta: "Porque siempre tiene la 'llave'."
    },
    {
        pregunta: "¿Cómo se ríe un programador?",
        respuesta: "'JA!va'."
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