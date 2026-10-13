
function normalizar(texto) {
  return String(texto ?? "")
    .trim()
    .toLocaleLowerCase("es");
}

function coincide(respuesta, opciones) {
  const valor = normalizar(respuesta);
  return valor !== "" &&
    opciones.some(opcion => normalizar(opcion) === valor);
}

function calcularResultados(respuestas) {
  const area = respuestas.area ?? "";
  const fortalezas = respuestas.fortalezas ?? [
    respuestas.fortaleza1,
    respuestas.fortaleza2
  ].filter(Boolean);
  const objetivo = respuestas.objetivo ?? "";

  const resultados = window.programas.map(programa => {
    let puntos = 0;
    const coincidencias = [];

    if (coincide(area, programa.areas)) {
      puntos += 3;
      coincidencias.push("Área de interés");
    }

    const fortalezasCoincidentes = new Set(
      fortalezas
        .filter(Boolean)
        .filter(fortaleza =>
          coincide(fortaleza, programa.fortalezas)
        )
        .map(normalizar)
    );

    puntos += fortalezasCoincidentes.size * 2;

    if (fortalezasCoincidentes.size > 0) {
      coincidencias.push(
        `${fortalezasCoincidentes.size} fortaleza(s)`
      );
    }

    if (coincide(objetivo, programa.objetivos)) {
      puntos += 3;
      coincidencias.push("Objetivo profesional");
    }

    return {
      ...programa,
      puntos,
      afinidad: puntos * 10,
      coincidencias
    };
  });

  return resultados
    .sort((a, b) =>
      b.puntos - a.puntos ||
      a.nombre.localeCompare(b.nombre, "es")
    )
    .slice(0, 3);
}
