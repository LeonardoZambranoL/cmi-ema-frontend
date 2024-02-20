import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { FAQType, CountryType, RessourceType } from "@/types";
import { link } from "fs";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getFAQ(){
  const faqs: FAQType[] = [
    {
      question: "Prueba y Niveles",
      answer:
        "Se contará con una sola fase virtual de 4 problemas con una calificación de 7 puntos cada uno y será dividida en dos niveles:\n\n•Smooth: Dirigida a estudiantes de Básico Superior (8vo - 10mo)\n•Heavy: Dirigida a estudiantes de Bachillerato (1ro - 3ro)\n\nLa prueba tendrá una duración diferente para cada nivel: *3.5 horas para el nivel Smooth y 4 horas para Heavy*. Una vez terminado este tiempo, habrá media hora adicional para el proceso de escaneo y envío.",
    },
    {
      question: "Países participantes",
      answer:
        "•Ecuador\n•Bolivia\n•República Dominicana\n•Chile\n•Panamá\n•El Salvador",
    },
    {
      question: "¿Qué plataformas se usarán?",
      answer:
        "Usaremos las plataformas de -hay que ver- para la prueba y Zoom para la supervisión de la misma. Se dará mayor información sobre estas herramientas antes de la prueba, por favor estar atentos a su correo electrónico, pues este es nuestro principal medio de comunicación con los participantes.",
    },
    {
      question: "¿Qué temas se tratan en la olimpiada?",
      answer:
        "En Olimpiadas de Matemáticas no se incluyen temas avanzados ni sofisticados sino material básico dispuesto de tal forma que el estudiante utilice su ingenio, creatividad e intuición. Eso quiere decir que para competir en matemáticas no hace falta grandes conocimientos ni haber obtenido altas calificaciones en el colegio, lo único que necesitas es eso: ingenio, creatividad, ganas e intuición. Como referencia puedes revisar nuestra sección de Recursos de Entrenamiento.",
    },
    {
      question: "¿Puedo representar a mi colegio?",
      answer:
        "Sí.\nAquellas instituciones de donde se inscriban al menos tres alumnos, podrán participar en la categoría por colegios. El puntaje de la unidad educativa se determinará tomando el promedio de los tres mayores puntajes de estudiantes de dicha institución.",
    },
    {
      question: "¿Cuáles son las fechas importantes?",
      answer:
        "Enero 3, 2024: Cierre de Inscripciones\nEnero 8, 2024: 9h00-12h30 Prueba del Nivel Smooth\nEnero 9, 2024: 9h00-13h00 Prueba del Nivel Heavy\nEnero 24, 2024:  Publicación de Resultados\nEnero 29, 2024: Ceremonia de Premiación\n",
    },
    {
      question: "¿Qué costos tiene la Olimpiada?",
      answer:
        "La CMI 2024 es completamente gratuita.",
    },
    {
      question: "¿Cómo me inscribo?",
      answer:
        "Sigue el enlace en esta página para inscribirte. Una vez llenado y enviado el formulario de inscripción recibirás un correo de confirmación. Da clic al enlace del correo para terminar tu proceso de inscripción.\nEs importante que los correos de los participantes sean únicos, pues crearemos cuentas para cada estudiante.",
    },
    {
      question: "¿Qué es la leaderboard?",
      answer:
        "La leaderboard es una tabla donde mostraremos los puntajes de los estudiantes. Es una manera de ver cómo fue tu rendimiento en comparación al de otros olímpicos tanto de tu país como de los demás países participantes. Solo serán mostradas las calificaciones de los estudiantes que hayan decidido participar en la leaderboard en el formulario de inscripción.",
    },
    {
      question: "¿Qué pasa si tengo más preguntas?",
      answer:
        "Cualquier consulta, no dudes en escribirnos a: cmiolimpidas@gmail.com.",
    },    
  ];

  return faqs;
}



export function getCountries(){
  const countries: CountryType[] = [
    { id: "1", name: "Ecuador" },
    { id: "2", name: "República Dominicana" },
    { id: "3", name: "Panamá" },
    { id: "4", name: "Venezuela" }
  ];
  return countries;
}

export function getSchoolByBountry(country: string){
  if (!country){
    return [];
  }
  const schoolCountriesMap = {
    "1":[
      { id: "1", name:"IPAC"}, 
      { id: "2", name:"Americano"}, 
      { id: "3", name:"Liceo"}, 
      { id: "4", name:"Espiritu Santo"},
    ], 
    "2":[
      { id: "5", name:"República 1"}, 
      { id: "6", name:"República 2"}, 
      { id: "7", name:"República 3"}, 
      { id: "8", name:"República 4"},
    ], 
    "3":[
      { id: "9", name:"Panamá 1"}, 
      { id: "10", name:"Panamá 2"}, 
      { id: "11", name:"Panamá 3"}, 
      { id: "12", name:"Panamá 4"},
    ], 
    "4":[
      { id: "13", name:"Venezuela 1"}, 
      { id: "14", name:"Venezuela 2"}, 
      { id: "15", name:"Venezuela 3"}, 
      { id: "16", name:"Venezuela 4"},
    ]
    };
    switch (country){
      case "1": return schoolCountriesMap["1"];
      case "2" : return schoolCountriesMap["2"];
      case "3": return schoolCountriesMap["3"];
      case "4": return schoolCountriesMap["4"];
    }
    return [];
}

export function getWebRessources(){
  const resources: RessourceType[] = [
    {
      title: "OMEC",
      description:
        "Recursos de la Olimpiada Ecuatoriana de Matemáticas",
      content: "Incluye:\n\n•Olimpiadas nacionales\n•Selectivos Nacionales\n•Olimpiadas internacionales\n•Listas semanales de entrenamiento\n•Pruebas y soluciones",
      link: "https://omec-mat.org/entrenamiento/",
      free: true,
    },
    {
      title: "AoPS",
      description:
        "Art of Problem Solving",
      content: "Extenso foro que almacena de problemas de todo tipo, entre ellos los de olimpiadas de matemáticas. De aquí se pueden encontrar problemas de olimpiadas pasadas de todo el mundo, desde regionales y nacionales hasta internacionales. ",
      link: "https://artofproblemsolving.com/community/c13_contests",
      free: true,
    },
    {
      title: "APOL",
      description:
        "Academia de Ciencias Exactas",
      content: "La Academia de Ciencias Exactas APOL organiza las Olimpiadas APOL, un concurso de dos fases de matemáticas y física, y también nos apoyan en la organización de la CMI. Debido a que dividimos las categoría de manera parecida (Básico Superior y Bachillerato), sus pruebas son una buena referencia para los problemas que encontrarás en la CMI.",
      link: "https://apol.com.ec/olimpiadas/",
      free: true,
    },
  ];

  return resources;
}

export function getBookRessources(){
  const resources: RessourceType[] = [
    {
      title: "LIBRO CMI",
      description:
        "Libro de la primera edicion de la CMI",
      content: "Incluye:\n\n•Nivel Smooth\n•Nivel Hard\n•Pruebas y soluciones",
      link: "/LibroCMI.pdf",
      free: true,
    },
    {
      title: "A Beautiful Journey Through Olympiad Geometry",
      description:
        "por Stefan Lozanovski",
      content: "libro que presenta todos los teoremas/métodos que necesitas saber para resolver problemas de geometría de las Olimpiadas. Avanza paso a paso, empezando desde cero, por lo que definitivamente podrás seguirlo sin ningún material adicional. Contiene problemas resueltos utilizando estos teoremas, pero también problemas relacionados que quedan sin resolver como práctica para el lector.",
      link: "https://www.olympiadgeometry.com/the-book.html",
      free: true,
    },
    //{
    //  title: " Modern Olympiad Number Theory",
    //  description:
    //    "por Aditya Khurmi",
    //  content: "Aunque este libro recorre los temas básicos, los problemas no son sencillos o triviales por lo que recomendamos que le dediques una cantidad considerable de tiempo a esta sección.",
    //  link: "https://artofproblemsolving.com/community/c6h2344755",
    //  free: true,
    //},
    {
      title: "Euclidean Geometry in Mathematical Olympiads",
      description:
        "por Evan Chen",
      content: "Escrito por Evan Chen, un renombrado olímpico de matemáticas, es un libro completamente acerca de la rama de Geometría. Gracias a que engloba desde temas básicos hasta avanzados eficientemente, es considerado uno de los mejores libros para geometría olímpica.",
      link: "https://web.evanchen.cc/geombook.html",
      free: false,
    },
    {
      title: "Cuadernos de Olimpiada",
      description:
        "La Olimpiada Méxicana de Matemáticas (OMM)",
      content: "Extensa colección de libros olímpicos, muchos de ellos amigables para empezar a aprender matemática olímpica. La mayoria de libros tratan una rama a profundidad.",
      link: "https://www.ommenlinea.org/publicaciones/libros-de-olimpiada/",
      free: false,
    },
    {
      title: "Problem-Solving Strategies",
      description:
        "por Arthur Engel",
      content: "Libro dedicado a estrategias para resolver problemas. A diferencia de libros anteriores, no se basa mucho en una rama específica.",
      link: "https://www.amazon.com/Problem-Solving-Strategies-Problem-Books-Mathematics/dp/0387982191",
      free: false,
    },
    //{
    //  title: "The Art and Craft of Problem Solving",
    //  description:
    //    "por Paul Zeitz",
    //  content: "Escrito por un entrenador del equipo estadounidense para la Olimpiada Internacional de Matemáticas (IMO), y al igual que el libro anterior, trata de estrategias generales para resolver problemas.\nLos 2 últimos libros tienen capitulos muy interesantes para aprender a afrontar problemas de olimpiadas, sin embargo también tiene capítulos con temas bastante avanzados por lo que el lector debe ser juicioso con respecto a los capitulos que se está leyendo.",
    //  link: "https://www.amazon.com/Art-Craft-Problem-Solving/dp/0471789011",
    //  free: false,
    //},
  ];
  return resources;
}
