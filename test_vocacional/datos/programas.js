const programas = [
  {
    nombre: "Tecnología en Gestión del Turismo Sostenible",
    nivel: "Tecnología",
    facultad: "Facultad de Ciencias Ambientales",
    jornada: "Presencial · Nocturna",
    areas: ["Turismo, cultura y servicios", "Medio ambiente y sostenibilidad", "Administración, negocios y emprendimiento"],
    fortalezas: ["Trabajo con personas y empatía", "Comunicación", "Organización y gestión", "Creatividad e imaginación"],
    objetivos: ["Desarrollarme en turismo, cultura y servicios", "Crear mi propio negocio o emprender", "Dirigir empresas, equipos o proyectos"],
    descripcion: "Gestiona servicios y experiencias turísticas con enfoque sostenible, integrando alojamiento, gastronomía, patrimonio, mercadeo y gestión ambiental."
  },
  {
    nombre: "Administración Ambiental",
    nivel: "Profesional universitario",
    facultad: "Facultad de Ciencias Ambientales",
    jornada: "Presencial · Diurna",
    areas: ["Medio ambiente y sostenibilidad", "Administración, negocios y emprendimiento", "Agro, territorio y naturaleza"],
    fortalezas: ["Sensibilidad ambiental", "Organización y gestión", "Análisis e interpretación de información", "Resolución de problemas"],
    objetivos: ["Trabajar por el medio ambiente y la sostenibilidad", "Dirigir empresas, equipos o proyectos", "Trabajar con personas y contribuir a la sociedad"],
    descripcion: "Gestiona programas, proyectos y organizaciones frente a retos ambientales, territoriales y de sostenibilidad."
  },
  {
    nombre: "Licenciatura en Tecnología",
    nivel: "Licenciatura",
    facultad: "Facultad de Ciencias de la Educación",
    jornada: "Presencial · Diurna",
    areas: ["Educación y enseñanza", "Tecnología y computación", "Comunicación, medios y creatividad"],
    fortalezas: ["Comunicación", "Trabajo con personas y empatía", "Creatividad e imaginación", "Afinidad con la tecnología"],
    objetivos: ["Enseñar y formar a otras personas", "Trabajar con personas y contribuir a la sociedad"],
    descripcion: "Forma docentes que integran tecnología, comunicación e informática en procesos educativos y proyectos pedagógicos mediados por TIC."
  },
  {
    nombre: "Ingeniería Física",
    nivel: "Ingeniería",
    facultad: "Facultad de Ingenierías",
    jornada: "Presencial · Diurna",
    areas: ["Matemáticas y ciencias exactas", "Ciencias naturales y experimentales", "Ingeniería y tecnología aplicada"],
    fortalezas: ["Razonamiento matemático", "Pensamiento lógico", "Curiosidad e investigación", "Resolución de problemas"],
    objetivos: ["Investigar y generar conocimiento", "Diseñar, construir o mejorar soluciones", "Analizar información y resolver problemas complejos"],
    descripcion: "Combina física, matemáticas e ingeniería para investigar y desarrollar soluciones en instrumentación, materiales, óptica, metrología y sistemas físicos."
  },
  {
    nombre: "Ingeniería Electrónica",
    nivel: "Ingeniería",
    facultad: "Facultad de Ingenierías",
    jornada: "Presencial · Diurna (jornada especial)",
    areas: ["Electricidad, electrónica y automatización", "Tecnología y computación", "Ingeniería y tecnología aplicada"],
    fortalezas: ["Afinidad con la tecnología", "Pensamiento lógico", "Resolución de problemas", "Creatividad e imaginación"],
    objetivos: ["Crear y desarrollar tecnología", "Diseñar, construir o mejorar soluciones"],
    descripcion: "Diseña y gestiona sistemas electrónicos aplicados a automatización, comunicaciones, sistemas embebidos, datos y control."
  },
  {
    nombre: "Tecnología Química",
    nivel: "Tecnología",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Ciencias naturales y experimentales", "Industria, manufactura y producción"],
    fortalezas: ["Atención al detalle y precisión", "Habilidad práctica", "Curiosidad e investigación", "Análisis e interpretación de información"],
    objetivos: ["Trabajar en industria, producción y procesos", "Investigar y generar conocimiento"],
    descripcion: "Aplica análisis químicos y control de calidad en laboratorio y procesos productivos de la industria química."
  },
  {
    nombre: "Ingeniería en Procesos Sostenibles de las Maderas",
    nivel: "Ingeniería",
    facultad: "Facultad de Ciencias Agrarias y Agroindustria",
    jornada: "Presencial · Diurna",
    areas: ["Industria, manufactura y producción", "Medio ambiente y sostenibilidad", "Agro, territorio y naturaleza"],
    fortalezas: ["Resolución de problemas", "Habilidad práctica", "Sensibilidad ambiental", "Organización y gestión"],
    objetivos: ["Trabajar en industria, producción y procesos", "Trabajar por el medio ambiente y la sostenibilidad", "Diseñar, construir o mejorar soluciones"],
    descripcion: "Mejora el aprovechamiento y transformación de la madera mediante procesos industriales, tecnológicos y ambientalmente responsables."
  },
  {
    nombre: "Tecnología en Producción Agrícola",
    nivel: "Tecnología",
    facultad: "Facultad de Ciencias Agrarias y Agroindustria",
    jornada: "Presencial · Diurna",
    areas: ["Agro, territorio y naturaleza", "Medio ambiente y sostenibilidad", "Administración, negocios y emprendimiento"],
    fortalezas: ["Habilidad práctica", "Sensibilidad ambiental", "Organización y gestión", "Liderazgo e iniciativa"],
    objetivos: ["Contribuir al desarrollo del campo y los territorios", "Crear mi propio negocio o emprender", "Trabajar por el medio ambiente y la sostenibilidad"],
    descripcion: "Gestiona sistemas de producción agrícola, cultivos, poscosecha y agronegocios con enfoque territorial y sostenible."
  },
  {
    nombre: "Tecnología en Producción Forestal",
    nivel: "Tecnología",
    facultad: "Facultad de Ciencias Agrarias y Agroindustria",
    jornada: "Presencial · Diurna",
    areas: ["Agro, territorio y naturaleza", "Medio ambiente y sostenibilidad"],
    fortalezas: ["Sensibilidad ambiental", "Habilidad práctica", "Atención al detalle y precisión"],
    objetivos: ["Contribuir al desarrollo del campo y los territorios", "Trabajar por el medio ambiente y la sostenibilidad"],
    descripcion: "Gestiona inventarios, silvicultura, aprovechamiento y producción forestal con criterios de sostenibilidad y certificación."
  },
  {
    nombre: "Física",
    nivel: "Profesional universitario",
    facultad: "Facultad de Ciencias Básicas",
    jornada: "Presencial · Diurna",
    areas: ["Matemáticas y ciencias exactas", "Ciencias naturales y experimentales"],
    fortalezas: ["Razonamiento matemático", "Curiosidad e investigación", "Pensamiento lógico", "Análisis e interpretación de información"],
    objetivos: ["Investigar y generar conocimiento", "Analizar información y resolver problemas complejos"],
    descripcion: "Estudia, modela e investiga fenómenos naturales mediante matemáticas, experimentación y herramientas computacionales."
  },
  {
    nombre: "Matemática",
    nivel: "Profesional universitario",
    facultad: "Facultad de Ciencias Básicas",
    jornada: "Presencial · Diurna",
    areas: ["Matemáticas y ciencias exactas", "Tecnología y computación"],
    fortalezas: ["Razonamiento matemático", "Pensamiento lógico", "Análisis e interpretación de información", "Resolución de problemas"],
    objetivos: ["Analizar información y resolver problemas complejos", "Investigar y generar conocimiento"],
    descripcion: "Desarrolla y aplica modelos y métodos matemáticos en investigación, consultoría, datos y problemas cuantitativos."
  },
  {
    nombre: "Ingeniería de Manufactura",
    nivel: "Ingeniería",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Industria, manufactura y producción", "Ingeniería y tecnología aplicada"],
    fortalezas: ["Resolución de problemas", "Habilidad práctica", "Organización y gestión", "Afinidad con la tecnología"],
    objetivos: ["Trabajar en industria, producción y procesos", "Diseñar, construir o mejorar soluciones", "Dirigir empresas, equipos o proyectos"],
    descripcion: "Diseña, organiza y mejora procesos, operaciones y productos de manufactura integrando calidad, automatización y gestión tecnológica."
  },
  {
    nombre: "Tecnología Eléctrica",
    nivel: "Tecnología",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Electricidad, electrónica y automatización", "Ingeniería y tecnología aplicada"],
    fortalezas: ["Resolución de problemas", "Afinidad con la tecnología", "Análisis e interpretación de información", "Pensamiento lógico"],
    objetivos: ["Diseñar, construir o mejorar soluciones", "Trabajar en industria, producción y procesos"],
    descripcion: "Analiza, opera y mantiene sistemas eléctricos, máquinas, transmisión, distribución, protecciones y control."
  },
  {
    nombre: "Administración Industrial",
    nivel: "Profesional universitario",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Administración, negocios y emprendimiento", "Industria, manufactura y producción"],
    fortalezas: ["Liderazgo e iniciativa", "Organización y gestión", "Comunicación", "Análisis e interpretación de información"],
    objetivos: ["Dirigir empresas, equipos o proyectos", "Crear mi propio negocio o emprender", "Trabajar en industria, producción y procesos"],
    descripcion: "Dirige organizaciones integrando estrategia, finanzas, mercadeo, talento humano, producción, calidad, logística y proyectos."
  },
  {
    nombre: "Licenciatura en Artes Visuales",
    nivel: "Licenciatura",
    facultad: "Facultad de Bellas Artes y Humanidades",
    jornada: "Presencial · Diurna",
    areas: ["Artes, música y expresión creativa", "Educación y enseñanza", "Sociedad, cultura y humanidades"],
    fortalezas: ["Sensibilidad y expresión artística", "Creatividad e imaginación", "Comunicación", "Trabajo con personas y empatía"],
    objetivos: ["Crear, interpretar o desarrollar expresiones artísticas y culturales", "Enseñar y formar a otras personas", "Trabajar con personas y contribuir a la sociedad"],
    descripcion: "Forma creadores y docentes en artes visuales con capacidad para desarrollar procesos artísticos, pedagógicos y culturales."
  },
  {
    nombre: "Licenciatura en Filosofía",
    nivel: "Licenciatura",
    facultad: "Facultad de Bellas Artes y Humanidades",
    jornada: "Presencial · Diurna",
    areas: ["Sociedad, cultura y humanidades", "Educación y enseñanza"],
    fortalezas: ["Pensamiento crítico", "Curiosidad e investigación", "Comunicación", "Pensamiento lógico"],
    objetivos: ["Enseñar y formar a otras personas", "Investigar y generar conocimiento"],
    descripcion: "Forma docentes e investigadores capaces de analizar críticamente problemas filosóficos, éticos, políticos y del conocimiento."
  },
  {
    nombre: "Licenciatura en Bilingüismo con Énfasis en Inglés",
    nivel: "Licenciatura",
    facultad: "Facultad de Bellas Artes y Humanidades",
    jornada: "Presencial · Diurna",
    areas: ["Idiomas, lenguas y comunicación intercultural", "Educación y enseñanza", "Sociedad, cultura y humanidades"],
    fortalezas: ["Comunicación", "Trabajo con personas y empatía", "Curiosidad e investigación", "Pensamiento crítico"],
    objetivos: ["Enseñar y formar a otras personas", "Trabajar con personas y contribuir a la sociedad"],
    descripcion: "Forma docentes de inglés con competencias lingüísticas, pedagógicas, investigativas e interculturales."
  },
  {
    nombre: "Licenciatura en Música",
    nivel: "Licenciatura",
    facultad: "Facultad de Bellas Artes y Humanidades",
    jornada: "Presencial · Diurna",
    areas: ["Artes, música y expresión creativa", "Educación y enseñanza"],
    fortalezas: ["Sensibilidad y expresión artística", "Creatividad e imaginación", "Comunicación", "Habilidad práctica"],
    objetivos: ["Crear, interpretar o desarrollar expresiones artísticas y culturales", "Enseñar y formar a otras personas"],
    descripcion: "Integra formación musical, interpretación, creación y pedagogía para el desempeño artístico y educativo."
  },
  {
    nombre: "Administración del Turismo Sostenible",
    nivel: "Profesional universitario",
    facultad: "Facultad de Ciencias Ambientales",
    jornada: "Presencial · Diurna",
    areas: ["Turismo, cultura y servicios", "Administración, negocios y emprendimiento", "Medio ambiente y sostenibilidad"],
    fortalezas: ["Organización y gestión", "Liderazgo e iniciativa", "Comunicación", "Trabajo con personas y empatía"],
    objetivos: ["Dirigir empresas, equipos o proyectos", "Desarrollarme en turismo, cultura y servicios", "Crear mi propio negocio o emprender"],
    descripcion: "Gestiona organizaciones, destinos, productos y servicios turísticos con enfoque empresarial y sostenible."
  },
  {
    nombre: "Licenciatura en Educación Infantil",
    nivel: "Licenciatura",
    facultad: "Facultad de Ciencias de la Educación",
    jornada: "Presencial · Diurna",
    areas: ["Educación y enseñanza", "Sociedad, cultura y humanidades"],
    fortalezas: ["Trabajo con personas y empatía", "Creatividad e imaginación", "Comunicación", "Sensibilidad y expresión artística"],
    objetivos: ["Enseñar y formar a otras personas", "Trabajar con personas y contribuir a la sociedad"],
    descripcion: "Forma docentes para acompañar el desarrollo integral y aprendizaje de niños en primera infancia mediante experiencias pedagógicas, lúdicas y expresivas."
  },
  {
    nombre: "Licenciatura en Ciencias Sociales",
    nivel: "Licenciatura",
    facultad: "Facultad de Ciencias de la Educación",
    jornada: "Presencial · Diurna",
    areas: ["Sociedad, cultura y humanidades", "Educación y enseñanza"],
    fortalezas: ["Pensamiento crítico", "Comunicación", "Curiosidad e investigación", "Análisis e interpretación de información"],
    objetivos: ["Enseñar y formar a otras personas", "Investigar y generar conocimiento", "Trabajar con personas y contribuir a la sociedad"],
    descripcion: "Forma docentes para comprender y enseñar procesos sociales, históricos, territoriales y culturales con enfoque crítico e investigativo."
  },
  {
    nombre: "Licenciatura en Educación Básica Primaria",
    nivel: "Licenciatura",
    facultad: "Facultad de Ciencias de la Educación",
    jornada: "Presencial · Diurna",
    areas: ["Educación y enseñanza", "Sociedad, cultura y humanidades"],
    fortalezas: ["Comunicación", "Organización y gestión", "Pensamiento crítico", "Creatividad e imaginación"],
    objetivos: ["Enseñar y formar a otras personas", "Trabajar con personas y contribuir a la sociedad"],
    descripcion: "Forma docentes integrales para orientar las distintas áreas de la educación básica primaria y gestionar procesos pedagógicos interdisciplinarios."
  },
  {
    nombre: "Licenciatura en Literatura y Lengua Castellana",
    nivel: "Licenciatura",
    facultad: "Facultad de Ciencias de la Educación",
    jornada: "Presencial · Diurna",
    areas: ["Educación y enseñanza", "Sociedad, cultura y humanidades", "Comunicación, medios y creatividad"],
    fortalezas: ["Comunicación", "Pensamiento crítico", "Creatividad e imaginación", "Curiosidad e investigación"],
    objetivos: ["Enseñar y formar a otras personas", "Investigar y generar conocimiento"],
    descripcion: "Forma docentes en literatura, lengua y producción textual, articulando análisis crítico, creación, investigación y pedagogía."
  },
  {
    nombre: "Licenciatura en Etnoeducación",
    nivel: "Licenciatura",
    facultad: "Facultad de Ciencias de la Educación",
    jornada: "Presencial · Diurna",
    areas: ["Sociedad, cultura y humanidades", "Educación y enseñanza"],
    fortalezas: ["Pensamiento crítico", "Trabajo con personas y empatía", "Comunicación", "Curiosidad e investigación"],
    objetivos: ["Enseñar y formar a otras personas", "Trabajar con personas y contribuir a la sociedad", "Investigar y generar conocimiento"],
    descripcion: "Forma docentes para contextos diversos e interculturales, con énfasis en comunidades, identidad, territorio y procesos socioeducativos."
  },
  {
    nombre: "Ciencias del Deporte y la Recreación",
    nivel: "Profesional universitario",
    facultad: "Facultad de Ciencias de la Salud",
    jornada: "Presencial · Diurna",
    areas: ["Deporte, actividad física y recreación", "Salud y cuidado"],
    fortalezas: ["Habilidad práctica", "Trabajo con personas y empatía", "Liderazgo e iniciativa", "Organización y gestión"],
    objetivos: ["Cuidar la salud y mejorar el bienestar", "Trabajar con personas y contribuir a la sociedad", "Dirigir empresas, equipos o proyectos"],
    descripcion: "Forma profesionales para intervenir en actividad física, deporte, recreación, entrenamiento, bienestar y gestión deportiva."
  },
  {
    nombre: "Medicina Veterinaria y Zootecnia",
    nivel: "Profesional universitario",
    facultad: "Facultad de Ciencias de la Salud",
    jornada: "Presencial · Diurna",
    areas: ["Salud y cuidado", "Ciencias naturales y experimentales", "Agro, territorio y naturaleza"],
    fortalezas: ["Habilidad práctica", "Atención al detalle y precisión", "Análisis e interpretación de información", "Sensibilidad ambiental"],
    objetivos: ["Cuidar la salud y mejorar el bienestar", "Contribuir al desarrollo del campo y los territorios", "Investigar y generar conocimiento"],
    descripcion: "Aborda salud y producción animal integrando ciencias biológicas, clínica veterinaria, zootecnia y desarrollo agropecuario."
  },
  {
    nombre: "Medicina",
    nivel: "Profesional universitario",
    facultad: "Facultad de Ciencias de la Salud",
    jornada: "Presencial · Diurna",
    areas: ["Salud y cuidado", "Ciencias naturales y experimentales"],
    fortalezas: ["Trabajo con personas y empatía", "Pensamiento crítico", "Análisis e interpretación de información", "Atención al detalle y precisión"],
    objetivos: ["Cuidar la salud y mejorar el bienestar", "Trabajar con personas y contribuir a la sociedad", "Investigar y generar conocimiento"],
    descripcion: "Forma médicos para prevenir, diagnosticar y tratar problemas de salud del individuo, la familia y la comunidad."
  },
  {
    nombre: "Tecnología en Atención Prehospitalaria",
    nivel: "Tecnología",
    facultad: "Facultad de Ciencias de la Salud",
    jornada: "Presencial · Nocturna",
    areas: ["Salud y cuidado"],
    fortalezas: ["Habilidad práctica", "Resolución de problemas", "Trabajo con personas y empatía", "Pensamiento crítico"],
    objetivos: ["Cuidar la salud y mejorar el bienestar", "Trabajar con personas y contribuir a la sociedad"],
    descripcion: "Forma tecnólogos para responder a urgencias y emergencias, brindar atención inicial y apoyar sistemas prehospitalarios."
  },
  {
    nombre: "Administración de Empresas",
    nivel: "Profesional universitario",
    facultad: "Facultad de Ciencias Empresariales",
    jornada: "Presencial · Nocturna (jornada especial)",
    areas: ["Administración, negocios y emprendimiento"],
    fortalezas: ["Liderazgo e iniciativa", "Organización y gestión", "Comunicación", "Análisis e interpretación de información"],
    objetivos: ["Dirigir empresas, equipos o proyectos", "Crear mi propio negocio o emprender"],
    descripcion: "Forma administradores con visión emprendedora para liderar organizaciones, proyectos, procesos comerciales y decisiones empresariales."
  },
  {
    nombre: "Ingeniería Industrial",
    nivel: "Ingeniería",
    facultad: "Facultad de Ciencias Empresariales",
    jornada: "Presencial · Diurna / Nocturna (jornada especial)",
    areas: ["Industria, manufactura y producción", "Administración, negocios y emprendimiento", "Ingeniería y tecnología aplicada"],
    fortalezas: ["Resolución de problemas", "Organización y gestión", "Análisis e interpretación de información", "Liderazgo e iniciativa"],
    objetivos: ["Trabajar en industria, producción y procesos", "Dirigir empresas, equipos o proyectos", "Diseñar, construir o mejorar soluciones"],
    descripcion: "Optimiza sistemas productivos y organizacionales mediante ingeniería, análisis, gestión, calidad, logística y mejoramiento de procesos."
  },
  {
    nombre: "Ingeniería Civil",
    nivel: "Ingeniería",
    facultad: "Facultad de Mecánica Aplicada",
    jornada: "Presencial · Diurna",
    areas: ["Ingeniería y tecnología aplicada", "Matemáticas y ciencias exactas"],
    fortalezas: ["Resolución de problemas", "Razonamiento matemático", "Organización y gestión", "Habilidad práctica"],
    objetivos: ["Diseñar, construir o mejorar soluciones", "Dirigir empresas, equipos o proyectos"],
    descripcion: "Planea, diseña y ejecuta soluciones de infraestructura aplicando ciencias, ingeniería, gestión y análisis del entorno."
  },
  {
    nombre: "Ingeniería Mecánica",
    nivel: "Ingeniería",
    facultad: "Facultad de Mecánica Aplicada",
    jornada: "Presencial · Diurna",
    areas: ["Ingeniería y tecnología aplicada", "Industria, manufactura y producción"],
    fortalezas: ["Resolución de problemas", "Habilidad práctica", "Razonamiento matemático", "Afinidad con la tecnología"],
    objetivos: ["Diseñar, construir o mejorar soluciones", "Trabajar en industria, producción y procesos"],
    descripcion: "Diseña, analiza y mejora máquinas, sistemas mecánicos, procesos energéticos y soluciones para la industria."
  },
  {
    nombre: "Ingeniería Eléctrica",
    nivel: "Ingeniería",
    facultad: "Facultad de Ingenierías",
    jornada: "Presencial · Diurna",
    areas: ["Electricidad, electrónica y automatización", "Ingeniería y tecnología aplicada"],
    fortalezas: ["Resolución de problemas", "Razonamiento matemático", "Afinidad con la tecnología", "Análisis e interpretación de información"],
    objetivos: ["Diseñar, construir o mejorar soluciones", "Crear y desarrollar tecnología", "Trabajar en industria, producción y procesos"],
    descripcion: "Diseña y gestiona sistemas de generación, transmisión, distribución, conversión y uso de la energía eléctrica."
  },
  {
    nombre: "Ingeniería de Sistemas y Computación",
    nivel: "Ingeniería",
    facultad: "Facultad de Ingenierías",
    jornada: "Presencial · Diurna / Nocturna (jornada especial)",
    areas: ["Tecnología y computación", "Ingeniería y tecnología aplicada"],
    fortalezas: ["Pensamiento lógico", "Afinidad con la tecnología", "Resolución de problemas", "Creatividad e imaginación"],
    objetivos: ["Crear y desarrollar tecnología", "Diseñar, construir o mejorar soluciones", "Analizar información y resolver problemas complejos"],
    descripcion: "Diseña soluciones de software, sistemas computacionales y servicios tecnológicos para resolver problemas de organizaciones y sociedad."
  },
  {
    nombre: "Tecnología en Desarrollo del Software",
    nivel: "Tecnología",
    facultad: "Facultad de Ingenierías",
    jornada: "Presencial · Diurna",
    areas: ["Tecnología y computación"],
    fortalezas: ["Pensamiento lógico", "Afinidad con la tecnología", "Resolución de problemas", "Creatividad e imaginación"],
    objetivos: ["Crear y desarrollar tecnología", "Diseñar, construir o mejorar soluciones"],
    descripcion: "Forma tecnólogos para analizar, construir, probar e implementar soluciones de software y aplicaciones."
  },
  {
    nombre: "Tecnología Industrial",
    nivel: "Tecnología",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Industria, manufactura y producción", "Administración, negocios y emprendimiento"],
    fortalezas: ["Organización y gestión", "Análisis e interpretación de información", "Resolución de problemas", "Liderazgo e iniciativa"],
    objetivos: ["Trabajar en industria, producción y procesos", "Dirigir empresas, equipos o proyectos"],
    descripcion: "Apoya la gestión y mejoramiento de procesos productivos, administrativos, de calidad y operaciones industriales."
  },
  {
    nombre: "Tecnología en Gestión Logística",
    nivel: "Tecnología",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Administración, negocios y emprendimiento", "Industria, manufactura y producción"],
    fortalezas: ["Organización y gestión", "Análisis e interpretación de información", "Resolución de problemas", "Atención al detalle y precisión"],
    objetivos: ["Dirigir empresas, equipos o proyectos", "Trabajar en industria, producción y procesos"],
    descripcion: "Gestiona abastecimiento, inventarios, almacenamiento, distribución y operaciones logísticas en organizaciones."
  },
  {
    nombre: "Ingeniería Mecatrónica",
    nivel: "Ingeniería",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Electricidad, electrónica y automatización", "Ingeniería y tecnología aplicada", "Tecnología y computación"],
    fortalezas: ["Afinidad con la tecnología", "Resolución de problemas", "Pensamiento lógico", "Habilidad práctica"],
    objetivos: ["Crear y desarrollar tecnología", "Diseñar, construir o mejorar soluciones", "Trabajar en industria, producción y procesos"],
    descripcion: "Integra mecánica, electrónica, control y computación para diseñar sistemas automatizados y soluciones mecatrónicas."
  },
  {
    nombre: "Tecnología en Procesos de Fabricación Metalmecánica",
    nivel: "Tecnología",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Industria, manufactura y producción", "Ingeniería y tecnología aplicada"],
    fortalezas: ["Habilidad práctica", "Atención al detalle y precisión", "Resolución de problemas", "Afinidad con la tecnología"],
    objetivos: ["Trabajar en industria, producción y procesos", "Diseñar, construir o mejorar soluciones"],
    descripcion: "Aplica procesos de fabricación, mecanizado y transformación metalmecánica con criterios técnicos, de calidad y productividad."
  },
  {
    nombre: "Química Industrial",
    nivel: "Profesional universitario",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Ciencias naturales y experimentales", "Industria, manufactura y producción"],
    fortalezas: ["Atención al detalle y precisión", "Análisis e interpretación de información", "Curiosidad e investigación", "Resolución de problemas"],
    objetivos: ["Trabajar en industria, producción y procesos", "Investigar y generar conocimiento", "Diseñar, construir o mejorar soluciones"],
    descripcion: "Aplica la química al análisis, control, investigación y transformación de materiales y procesos de la industria."
  },
  {
    nombre: "Tecnología en Diseño y Construcción de Instalaciones Eléctricas de Media y Baja Tensión",
    nivel: "Tecnología",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Electricidad, electrónica y automatización", "Ingeniería y tecnología aplicada"],
    fortalezas: ["Habilidad práctica", "Atención al detalle y precisión", "Afinidad con la tecnología", "Organización y gestión"],
    objetivos: ["Diseñar, construir o mejorar soluciones", "Trabajar en industria, producción y procesos"],
    descripcion: "Diseña y ejecuta instalaciones eléctricas de media y baja tensión, redes, iluminación y proyectos eléctricos aplicados."
  },
  {
    nombre: "Tecnología en Desarrollo de Procesos Químicos Sostenibles",
    nivel: "Tecnología",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Ciencias naturales y experimentales", "Medio ambiente y sostenibilidad", "Agro, territorio y naturaleza"],
    fortalezas: ["Habilidad práctica", "Atención al detalle y precisión", "Sensibilidad ambiental", "Análisis e interpretación de información"],
    objetivos: ["Trabajar por el medio ambiente y la sostenibilidad", "Trabajar en industria, producción y procesos", "Contribuir al desarrollo del campo y los territorios"],
    descripcion: "Desarrolla y opera procesos químicos con orientación sostenible y aplicaciones productivas y agroindustriales."
  },
  {
    nombre: "Tecnología en Regencia de Farmacia",
    nivel: "Tecnología",
    facultad: "Facultad de Tecnología",
    jornada: "Presencial · Diurna",
    areas: ["Salud y cuidado", "Administración, negocios y emprendimiento"],
    fortalezas: ["Atención al detalle y precisión", "Organización y gestión", "Trabajo con personas y empatía", "Análisis e interpretación de información"],
    objetivos: ["Cuidar la salud y mejorar el bienestar", "Trabajar con personas y contribuir a la sociedad", "Dirigir empresas, equipos o proyectos"],
    descripcion: "Gestiona servicios farmacéuticos, medicamentos e inventarios con criterios sanitarios, administrativos y de atención al usuario."
  },
  {
    nombre: "Ingeniería en Procesos Agroindustriales",
    nivel: "Ingeniería",
    facultad: "Facultad de Ciencias Agrarias y Agroindustria",
    jornada: "Presencial · Por confirmar",
    areas: ["Industria, manufactura y producción", "Agro, territorio y naturaleza", "Ingeniería y tecnología aplicada"],
    fortalezas: ["Resolución de problemas", "Habilidad práctica", "Organización y gestión", "Afinidad con la tecnología"],
    objetivos: ["Trabajar en industria, producción y procesos", "Diseñar, construir o mejorar soluciones", "Contribuir al desarrollo del campo y los territorios"],
    descripcion: "Aplica ingeniería al diseño, transformación y mejoramiento de procesos agroindustriales y cadenas productivas del sector rural."
  },
  {
    nombre: "Tecnología en Producción Agrícola Integrada",
    nivel: "Tecnología",
    facultad: "Facultad de Ciencias Agrarias y Agroindustria",
    jornada: "Presencial · Por confirmar",
    areas: ["Agro, territorio y naturaleza", "Medio ambiente y sostenibilidad"],
    fortalezas: ["Habilidad práctica", "Sensibilidad ambiental", "Atención al detalle y precisión", "Organización y gestión"],
    objetivos: ["Contribuir al desarrollo del campo y los territorios", "Trabajar por el medio ambiente y la sostenibilidad", "Trabajar en industria, producción y procesos"],
    descripcion: "Gestiona sistemas agrícolas integrados con enfoque productivo, técnico y sostenible a lo largo del ciclo de cultivo."
  }
];
window.programas = programas;