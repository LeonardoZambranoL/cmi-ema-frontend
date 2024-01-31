import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { FAQType } from "@/app/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getFAQ(){
  const faqs: FAQType[] = [
    {
      question: "Paises participantes",
      answer:
        "•Ecuador\n•Bolivia\n•Republica dominicana\n•Chile\n•Panamá\n•El Salvador",
    },
    {
      question: "Prueba y Niveles",
      answer:
        "Se contará con una sola fase *virtual* de 4 problemas con una calificación de 7 puntos cada uno y será dividida en dos niveles:\n\n•Smooth:** Dirigida a estudiantes de Básico Superior (8vo - 10mo)\n•Heavy: Dirigida a estudiantes de Bachillerato (1ro - 3ro)\n\nLa prueba tendrá una duración diferente para cada nivel: *3.5 horas para el nivel Smooth y 4 horas para Heavy*. Una vez terminado este tiempo, habrá media hora adicional para el proceso de escaneo y envío.",
    },
    {
      question: "Que plataformas se usarán?",
      answer:
        "Usaremos las plataformas de [hay q ver] para la prueba y [Zoom] para la supervisión de la misma. Se dará mayor información sobre estas herramientas antes de la prueba, por favor estar atentos a su correo electrónico, pues este es nuestro principal medio de comunicación con los participantes.",
    },
    {
      question: "Qué temas se tratan en la olimpiada?",
      answer:
        "En Olimpiadas de Matemáticas no se incluyen temas avanzados ni sofisticados sino material básico dispuesto de tal forma que el estudiante utilice su ingenio, creatividad e intuición. Eso quiere decir que para competir en matemáticas no hace falta grandes conocimientos ni haber obtenido altas calificaciones en el colegio, lo único que necesitas es eso: ingenio, creatividad, ganas e intuición. Como referencia puedes revisar nuestra sección de Recursos de Entrenamiento.",
    },
    {
      question: "Colegios",
      answer:
        "Aquellas instituciones de donde se inscriban al menos tres alumnos, podrán participar en la categoría por colegios. El puntaje de la unidad educativa se determinará tomando el promedio de los tres mayores puntajes de estudiantes de dicha institución.",
    },
    {
      question: "Calendario",
      answer:
        "Enero 3, 2024: Cierre de Inscripciones\nEnero 8, 2024: 9h00-12h30 Prueba del Nivel Smooth\nEnero 9, 2024: 9h00-13h00 Prueba del Nivel Heavy\nEnero 24, 2024:  Publicación de Resultados\nEnero 29, 2024: Ceremonia de Premiación\n",
    },
    {
      question: "Que costos tiene la Olimpiada",
      answer:
        "La CMI 2024 es completamente gratuita.",
    },
    {
      question: "Proceso de inscripción",
      answer:
        "La CMI 2024 es completamente gratuita.",
    },
  ];

  return faqs;
}