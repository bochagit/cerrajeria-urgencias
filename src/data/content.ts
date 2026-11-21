/**
 * Contenido editorial de las secciones de confianza, proceso y preguntas frecuentes.
 * Textos orientativos: revisar con el cliente antes de publicar.
 */
export const ZONAS = [
  {
    id: "caba",
    name: "CABA",
    description: "Atención en todas las comunas.",
  },
  {
    id: "norte",
    name: "GBA Norte",
    description: "Cobertura en la zona norte del Gran Buenos Aires.",
  },
  {
    id: "oeste",
    name: "GBA Oeste",
    description: "Cobertura en la zona oeste del Gran Buenos Aires.",
  },
  {
    id: "sur",
    name: "GBA Sur",
    description: "Cobertura en la zona sur del Gran Buenos Aires.",
  },
] as const;

export const BENEFICIOS = [
  {
    title: "Atención 24/7",
    description: "Guardia permanente, incluidos fines de semana y feriados.",
  },
  {
    title: "Trabajo sin daños",
    description: "Técnicas no destructivas para preservar puertas y cerraduras.",
  },
  {
    title: "Presupuesto previo",
    description: "Te informamos el costo antes de empezar, sin sorpresas.",
  },
  {
    title: "Garantía por escrito",
    description: "Respaldamos cada intervención con garantía.",
  },
] as const;

export const PASOS = [
  {
    title: "Llamás o escribís",
    description: "Contanos qué pasó y desde dónde. Atendemos al momento.",
  },
  {
    title: "Llegamos a tu ubicación",
    description:
      "Un profesional se dirige al lugar con el equipo necesario. Tiempo estimado: [XX min].",
  },
  {
    title: "Resolvemos y verificamos",
    description:
      "Abrimos, reparamos o cambiamos la cerradura y comprobamos que todo funcione.",
  },
] as const;

export const FAQS = [
  {
    question: "¿Atienden de noche o los feriados?",
    answer: "Sí. La guardia está activa las 24 horas, los 7 días de la semana.",
  },
  {
    question: "¿Van a romper la puerta?",
    answer:
      "No. Priorizamos métodos no destructivos para preservar la puerta y la cerradura.",
  },
  {
    question: "¿Cuánto tarda en llegar un profesional?",
    answer:
      "[PLACEHOLDER: Definir el tiempo estimado por zona y las condiciones que pueden alterarlo.]",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer: "[PLACEHOLDER: Confirmar efectivo, transferencia y tarjetas disponibles.]",
  },
  {
    question: "¿Trabajan con vehículos?",
    answer:
      "Sí. Realizamos apertura de autos y reprogramación de llaves y controles.",
  },
] as const;
