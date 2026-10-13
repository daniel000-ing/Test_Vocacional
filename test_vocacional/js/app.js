
const inicio = document.getElementById("inicio");
const cuestionario = document.getElementById("cuestionario");
const resultados = document.getElementById("resultados");

const tituloPregunta = document.getElementById("tituloPregunta");
const tipoPregunta = document.getElementById("tipoPregunta");
const opciones = document.getElementById("opciones");

const contadorPregunta = document.getElementById("contadorPregunta");
const barraProgreso = document.getElementById("barraProgreso");

const btnIniciar = document.getElementById("btnIniciar");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnReiniciar = document.getElementById("btnReiniciar");

let indiceActual = 0;
let respuestas = {};

const nombresDimensiones = {
    intereses: "Intereses",
    habilidades: "Habilidades",
    objetivos: "Objetivos"
};

function mostrarPregunta() {
    const pregunta = window.PREGUNTAS[indiceActual];

    contadorPregunta.textContent =
        `Pregunta ${indiceActual + 1} de ${window.PREGUNTAS.length}`;

    barraProgreso.value =
        ((indiceActual + 1) / window.PREGUNTAS.length) * 100;

    tituloPregunta.textContent = pregunta.texto;
    tipoPregunta.textContent =
        `Dimensión: ${nombresDimensiones[pregunta.dimension]}`;

    opciones.replaceChildren();

    pregunta.opciones.forEach((opcion, indice) => {
        const etiqueta = document.createElement("label");
        etiqueta.className = "opcion";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `pregunta-${pregunta.id}`;
        radio.value = opcion.area;
        radio.checked = respuestas[pregunta.id] === opcion.area;

        const texto = document.createElement("span");
        texto.textContent = opcion.texto;

        etiqueta.append(radio, texto);
        opciones.appendChild(etiqueta);

        radio.addEventListener("change", () => {
            respuestas[pregunta.id] = opcion.area;
        });
    });

    btnAnterior.disabled = indiceActual === 0;

    btnSiguiente.textContent =
        indiceActual === window.PREGUNTAS.length - 1
            ? "Ver resultados"
            : "Siguiente";
}

function mostrarResultados() {
    cuestionario.hidden = true;
    resultados.hidden = false;

    const mejores = window.calcularResultados(respuestas).slice(0, 3);
    const lista = document.getElementById("listaResultados");

    lista.replaceChildren();

    mejores.forEach((programa, indice) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "resultado";

        const titulo = document.createElement("h3");
        titulo.textContent = `${indice + 1}. ${programa.nombre}`;

        const descripcion = document.createElement("p");
        descripcion.textContent = programa.descripcion;

        const afinidad = document.createElement("p");
        afinidad.textContent =
            `Afinidad estimada: ${programa.afinidad}%`;

        const barra = document.createElement("progress");
        barra.max = 100;
        barra.value = programa.afinidad;
        barra.setAttribute(
            "aria-label",
            `Afinidad estimada de ${programa.afinidad}%`
        );

        tarjeta.append(titulo, descripcion, afinidad, barra);
        lista.appendChild(tarjeta);
    });
}

btnIniciar.addEventListener("click", () => {
    indiceActual = 0;
    respuestas = {};

    inicio.hidden = true;
    resultados.hidden = true;
    cuestionario.hidden = false;

    mostrarPregunta();
});

btnAnterior.addEventListener("click", () => {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarPregunta();
    }
});

btnSiguiente.addEventListener("click", () => {
    const pregunta = window.PREGUNTAS[indiceActual];

    if (!respuestas[pregunta.id]) {
        alert("Selecciona una opción para continuar.");
        return;
    }

    if (indiceActual < window.PREGUNTAS.length - 1) {
        indiceActual++;
        mostrarPregunta();
    } else {
        mostrarResultados();
    }
});

btnReiniciar.addEventListener("click", () => {
    respuestas = {};
    indiceActual = 0;

    resultados.hidden = true;
    cuestionario.hidden = true;
    inicio.hidden = false;
});
