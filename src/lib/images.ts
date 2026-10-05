// Recorte 4:5 de la foto original (1024×571). Si llega una versión de más resolución, regenerar con un ancho de 900 px.
export const IGNACIO_PHOTO = {
  src: "/assets/ignacio-goni-fundador-yamato-456.webp",
  srcSet: "/assets/ignacio-goni-fundador-yamato-320.webp 320w, /assets/ignacio-goni-fundador-yamato-456.webp 456w",
  width: 456,
  height: 570,
  alt: "Ignacio Goñi, fundador de YAMATO",
} as const;

// Retratos a lápiz del equipo (/quienes-somos). Recorte 4:5 con la cabeza a la misma escala en todos,
// exportado a 400 y 800 px de ancho. Para sumar a alguien: mismo estilo, mismo encuadre, mismos dos tamaños.
function portrait(slug: string, name: string) {
  return {
    src: `/assets/${slug}-retrato-400.webp`,
    srcSet: `/assets/${slug}-retrato-400.webp 400w, /assets/${slug}-retrato-800.webp 800w`,
    width: 400,
    height: 500,
    alt: `Retrato a lápiz de ${name}`,
  } as const;
}

export const PORTRAITS = {
  ignacio: portrait("ignacio-goni", "Ignacio Goñi"),
  elena: portrait("elena-gonzalez-blanco", "Elena González-Blanco"),
  pedro: portrait("pedro-anos", "Pedro Anós"),
  joseLuis: portrait("jose-luis-garcia-benito", "José Luis García Benito"),
} as const;
