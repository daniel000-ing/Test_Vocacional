
window.calcularResultados = function (respuestas) {
    const dimensiones = [
        { id: "intereses", peso: 0.40 },
        { id: "habilidades", peso: 0.40 },
        { id: "objetivos", peso: 0.20 }
    ];

    const preguntas = window.PREGUNTAS;

    return window.PROGRAMAS.map(programa => {
        let afinidadTotal = 0;

        dimensiones.forEach(dimension => {
            const preguntasDimension = preguntas.filter(
                pregunta => pregunta.dimension === dimension.id
            );

            const respondidas = preguntasDimension.filter(
                pregunta => respuestas[pregunta.id]
            );

            if (respondidas.length === 0) {
                return;
            }

            const areasPrograma = programa[dimension.id];

            const coincidencias = respondidas.filter(pregunta => {
                return areasPrograma.includes(
                    respuestas[pregunta.id]
                );
            }).length;

            const afinidadDimension =
                (coincidencias / respondidas.length) * 100;

            afinidadTotal += afinidadDimension * dimension.peso;
        });

        return {
            ...programa,
            afinidad: Math.round(afinidadTotal)
        };
    }).sort((a, b) => b.afinidad - a.afinidad);
};
