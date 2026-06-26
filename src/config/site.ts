/* DEMO tier bajo — Cafetería */
export const site = {
  name: "Café Aurora",
  tagline: "Tu café de cada mañana, hecho con calma",
  logoText: "Café Aurora",
  whatsapp: "34600555666",
  email: "hola@cafeaurora.es",
  formAccessKey: "TU-ACCESS-KEY-WEB3FORMS",
  nav: [
    { label: "Inicio", href: "#hero" },
    { label: "La carta", href: "#features" },
    { label: "Desayunos", href: "#pricing" },
    { label: "Visítanos", href: "#contacto" },
  ],
  hero: {
    eyebrow: "Cafetería de especialidad · Sevilla",
    title: "El día empieza\nmejor con café",
    subtitle: "Café de especialidad, brunch casero y repostería del día. Un rincón con luz para empezar la mañana sin prisa.",
    ctaPrimary: { label: "Ver la carta", href: "#features" },
    ctaSecondary: { label: "Cómo llegar", href: "#contacto" },
    image: "",
  },
  featuresTitle: "Lo que servimos",
  features: [
    { icon: "☕", title: "Café de especialidad", text: "Tueste propio y métodos filtrados cada mañana." },
    { icon: "🥐", title: "Repostería casera", text: "Croissants y bizcochos hechos aquí, cada día." },
    { icon: "🍳", title: "Brunch todo el día", text: "Tostas, huevos y bowls hasta el cierre." },
    { icon: "🌿", title: "Terraza tranquila", text: "Un patio con sombra para desconectar." },
  ],
  pricingTitle: "Nuestros desayunos",
  pricing: [
    { name: "Desayuno simple", price: "4,50€", period: "", features: ["Café o infusión", "Tosta a elegir", "Zumo natural"], cta: "Ver carta", highlight: false },
    { name: "Brunch del día", price: "12€", period: "", features: ["Café de especialidad", "Plato principal", "Dulce + zumo"], cta: "Reservar mesa", highlight: true },
    { name: "Para llevar", price: "3,50€", period: "", features: ["Café en vaso", "Bollería del día", "Rápido y rico"], cta: "Pedir", highlight: false },
  ],
  cta: { title: "¿Te vemos mañana?", subtitle: "Reserva mesa para el finde o pásate sin más.", button: { label: "Reservar mesa", href: "#contacto" } },
  footer: { address: "Calle Sol 12, 41004 Sevilla", phone: "+34 600 555 666", hours: "Todos los días · 08:00–20:00", social: { instagram: "https://instagram.com/", facebook: "", tiktok: "https://tiktok.com/" } },
} as const;
export type Site = typeof site;
