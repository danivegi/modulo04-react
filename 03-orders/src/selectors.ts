import type { OrderLine } from "./model";

// Campos calculados: se derivan de las líneas, nunca se guardan en el estado.
export const getTotal = (lines: OrderLine[]) =>
  lines.reduce((sum, line) => sum + line.importe, 0);

export const getValidatedPercentage = (lines: OrderLine[]) =>
  lines.length === 0
    ? 0
    : Math.round(
        (lines.filter((line) => line.validated).length / lines.length) * 100
      );

export const getCanSend = (lines: OrderLine[]) =>
  lines.length > 0 && lines.every((line) => line.validated);