// selectores
const chisteTextoElement = document.getElementById("chiste-texto");
const btnChiste = document.getElementById("btn-chiste");

// chistes
const chistes = [
    {
        chiste: "¿Cuál es el animal más elegante de la programación? El pavo 'real'."
    },
    {
        chiste: "¿Qué hace un cocodrilo en un programa? ¡Muerde los errores!"
    },
    {
        chiste: "¿Cuál es el colmo de un programador? Que le dé un ataque de 'cookies'."
    },
    {
        chiste: "¿Por qué un programador es siempre el más buscado? Porque siempre tiene la 'llave'."
    },
    {
        chiste: "¿Cómo se ríe un programador? 'JA!va'."
    },
	{
        chiste: "¿Por qué los programadores siempre confunden Halloween con Navidad? Porque Oct 31 == Dec 25."
    },
    {
        chiste: "¿Qué le dijo un bit al otro? Nos vemos en el bus."
    },
    {
        chiste: "¿Por qué los programadores siempre tienen frío? Porque si no, serían programadores 'calientes'."
    },
    {
        chiste: "¿Cómo se llama un programador en la playa? Un 'scriptorium'."
    },
    {
        chiste: "¿Cuántos programadores se necesitan para cambiar una bombilla? Ninguno, es un problema de hardware."
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
    chisteTextoElement.textContent = chisteAleatorio.chiste;
});