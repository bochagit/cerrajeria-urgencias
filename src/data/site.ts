export const SITE = {
  brandName: "Cerrajería Urgencias 24hs",
  title: "Cerrajería Urgencias 24hs | Apertura Rápida y Emergencias",
  description:
    "[PLACEHOLDER: Descripción breve del servicio de cerrajería de urgencia las 24hs, zonas de cobertura y tiempo estimado de llegada.]",

  // Datos de contacto
  phoneDisplay: "011-XXXX-XXXX",
  phoneHref: "tel:+541100000000",
  whatsappDisplay: "11-XXXX-XXXX",
  whatsappHref:
    "https://wa.me/5491100000000?text=Hola%2C%20necesito%20un%20cerrajero%20de%20urgencia",

  coveragePlaceholder: "CABA y GBA",
  availabilityLabel: "Guardia activa 24hs",
  responseTimePlaceholder: "[XX min]",

  // Zonas a confirmar con el cliente.
  coverageZones: ["CABA", "GBA Norte", "GBA Oeste", "GBA Sur"],

  // Encuadre del mapa: CABA y primer cordón del GBA.
  map: {
    latitude: -34.6037,
    longitude: -58.3816,
    zoom: 13,
  },
} as const;
