export interface First90DaysRow {
  period: string;
  work: string;
  outcome: string;
}

export const FIRST_90_DAYS: First90DaysRow[] = [
  {
    period: "Días 1 a 30",
    work: "Entender negocio, clientes, equipo, canales y datos",
    outcome: "Diagnóstico y prioridades por escrito",
  },
  {
    period: "Días 31 a 60",
    work: "Fijar estrategia, KPIs y plan. Ordenar equipo y proveedores",
    outcome: "Plan con objetivos y cuadro de mando",
  },
  {
    period: "Días 61 a 90",
    work: "Activar las primeras palancas y medir",
    outcome: "Primeros resultados medidos y plan ajustado",
  },
];
