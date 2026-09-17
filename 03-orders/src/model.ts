export interface OrderLine {
  id: string;
  description: string;
  importe: number;
  validated: boolean;
}

export interface OrderState {
  numero: string;
  proveedor: string;
  fecha: string;
  lines: OrderLine[];
  selectedIds: string[];
}

export const initialOrder: OrderState = {
  numero: "PED-001",
  proveedor: "PC Componentes",
  fecha: new Date().toLocaleDateString("es-ES"),
  lines: [
    { id: "l1", description: "Tarjetas gráficas", importe: 1500, validated: true },
    { id: "l2", description: "Fuentes de alimentación", importe: 400, validated: false },
    { id: "l3", description: "Memorias RAM", importe: 1750, validated: false },
  ],
  selectedIds: [],
};