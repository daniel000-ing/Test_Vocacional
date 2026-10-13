
const inicio = document.getElementById("inicio");
const test = document.getElementById("test");
const resultados = document.getElementById("resultados");

const tituloPregunta = document.getElementById("tituloPregunta");
const descripcionPregunta = document.getElementById("descripcionPregunta");
const opciones = document.getElementById("opciones");
const numeroPregunta = document.getElementById("numeroPregunta");
const porcentaje = document.getElementById("porcentaje");
const barraProgreso = document.getElementById("barraProgreso");
const mensajeError = document.getElementById("mensajeError");

const btnIniciar = document.getElementById("btnIniciar");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnReiniciar = document.getElementById("btnReiniciar");

let indiceActual = 0;
let respuestas = {};

btnIniciar.addEventListener("click", () => {
    inicio.classList.add("oculto");
    resultados.classList.add("oculto");
    test.classList.remove("oculto");

    indiceActual = 0;
    respuestas = {};

    mostrarPregunta();
});

function mostrarPregunta() {
    const pregunta = preguntas[indiceActual];
    const numero = indiceActual + 1;
    const avance = Math.round(
        (numero / preguntas.length) * 100
    );

    numeroPregunta.textContent =
        `Pregunta ${numero} de ${preguntas.length}`;

    porcentaje.textContent = `${avance}%`;
    barraProgreso.style.width = `${avance}%`;

    tituloPregunta.textContent = pregunta.titulo;
    descripcionPregunta.textContent = pregunta.descripcion;

    opciones.innerHTML = "";

    pregunta.opciones.forEach((opcion) => {
        const etiqueta = document.createElement("label");
        etiqueta.className = "opcion";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = pregunta.id;
        radio.value = opcion;
        radio.checked = respuestas[pregunta.id] === opcion;

        radio.addEventListener("change", () => {
            respuestas[pregunta.id] = opcion;
            mensajeError.classList.add("oculto");
        });

        const texto = document.createElement("span");
        texto.textContent = opcion;

        etiqueta.appendChild(radio);
        etiqueta.appendChild(texto);
        opciones.appendChild(etiqueta);
    });

    btnAnterior.classList.toggle(
        "oculto",
        indiceActual === 0
    );

    btnSiguiente.textContent =
        indiceActual === preguntas.length - 1
            ? "Ver resultados"
            : "Siguiente";

    mensajeError.classList.add("oculto");
}

btnSiguiente.addEventListener("click", () => {
    const pregunta = preguntas[indiceActual];

    if (!respuestas[pregunta.id]) {
        mensajeError.classList.remove("oculto");
        return;
    }

    if (indiceActual < preguntas.length - 1) {
        indiceActual++;
        mostrarPregunta();
    } else {
        mostrarResultados();
    }
});

btnAnterior.addEventListener("click", () => {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarPregunta();
    }
});

function mostrarResultados() {
    test.classList.add("oculto");
    resultados.classList.remove("oculto");

    const listaResultados =
        document.getElementById("listaResultados");

    const mensajeResultado =
        document.getElementById("mensajeResultado");

    // Adaptamos las respuestas de las cuatro preguntas
    // al formato que espera calculo.js.
    const respuestasParaCalculo = {
        area: respuestas.area,
        fortalezas: [
            respuestas.fortaleza1,
            respuestas.fortaleza2
        ].filter(Boolean),
        objetivo: respuestas.objetivo
    };

    const recomendados =
        calcularResultados(respuestasParaCalculo);

    mensajeResultado.textContent =
        "Estas son las coincidencias preliminares de tus respuestas. " +
        "Explora cada programa y revisa si se ajusta a tus intereses.";

    listaResultados.innerHTML = "";

    if (
        recomendados.length === 0 ||
        recomendados.every(programa => programa.puntos === 0)
    ) {
        mensajeResultado.textContent =
            "No encontramos coincidencias directas. " +
            "Puedes revisar tus respuestas e intentarlo de nuevo.";
        return;
    }

    recomendados.forEach((programa, indice) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "resultado";

        const titulo = document.createElement("h3");
        titulo.textContent =
            `${indice + 1}. ${programa.nombre}`;

        const nivel = document.createElement("p");
        nivel.textContent = `Nivel: ${programa.nivel}`;

        const facultad = document.createElement("p");
        facultad.textContent = programa.facultad;

        const jornada = document.createElement("p");
        jornada.textContent = `Jornada: ${programa.jornada}`;

        const puntuacion = document.createElement("p");
        puntuacion.className = "puntuacion";
        puntuacion.textContent =
            `Afinidad preliminar: ${programa.afinidad}%`;

        const descripcion = document.createElement("p");
        descripcion.textContent = programa.descripcion;

        const coincidencias = document.createElement("p");
        coincidencias.textContent =
            "Coincidencias: " +
            (programa.coincidencias.join(", ") || "Ninguna");

        tarjeta.append(
            titulo,
            nivel,
            facultad,
            jornada,
            puntuacion,
            descripcion,
            coincidencias
        );

        listaResultados.appendChild(tarjeta);
    });
}

btnReiniciar.addEventListener("click", () => {
    respuestas = {};
    indiceActual = 0;

    resultados.classList.add("oculto");
    test.classList.add("oculto");
    inicio.classList.remove("oculto");

    barraProgreso.style.width = "0%";
    porcentaje.textContent = "0%";
});
