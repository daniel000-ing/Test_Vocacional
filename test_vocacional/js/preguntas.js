
const areas = [
    { id: "tecnologia", nombre: "Tecnología y programación" },
    { id: "ciencias", nombre: "Ciencias e investigación" },
    { id: "salud", nombre: "Salud y bienestar" },
    { id: "social", nombre: "Sociedad y educación" },
    { id: "arte", nombre: "Arte, diseño y creatividad" },
    { id: "negocios", nombre: "Negocios y administración" }
];

function crearOpciones() {
    return areas.map(area => ({
        texto: area.nombre,
        area: area.id
    }));
}

window.PREGUNTAS = [
    {
        id: 1,
        dimension: "intereses",
        texto: "¿Qué actividad te llama más la atención?",
        opciones: crearOpciones()
    },
    {
        id: 2,
        dimension: "intereses",
        texto: "¿Qué tema investigarías por curiosidad?",
        opciones: crearOpciones()
    },
    {
        id: 3,
        dimension: "intereses",
        texto: "¿Qué tipo de proyecto disfrutarías realizar?",
        opciones: crearOpciones()
    },
    {
        id: 4,
        dimension: "habilidades",
        texto: "¿En qué actividad sientes que podrías destacar?",
        opciones: crearOpciones()
    },
    {
        id: 5,
        dimension: "habilidades",
        texto: "¿Qué problema te gustaría aprender a resolver?",
        opciones: crearOpciones()
    },
    {
        id: 6,
        dimension: "habilidades",
        texto: "¿Qué tarea te gustaría mejorar con la práctica?",
        opciones: crearOpciones()
    },
    {
        id: 7,
        dimension: "objetivos",
        texto: "¿Qué te gustaría conseguir con tu carrera?",
        opciones: crearOpciones()
    },
    {
        id: 8,
        dimension: "objetivos",
        texto: "¿En qué entorno te gustaría trabajar?",
        opciones: crearOpciones()
    },
    {
        id: 9,
        dimension: "objetivos",
        texto: "¿Qué impacto te gustaría generar?",
        opciones: crearOpciones()
    }
];
