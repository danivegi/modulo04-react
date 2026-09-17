import type { OrderState } from "./model";

export type OrderAction =
  | { type: "UPDATE_IMPORTE"; id: string; importe: number }
  | { type: "TOGGLE_SELECTED"; id: string }
  | { type: "VALIDATE_SELECTED" }
  | { type: "INVALIDATE_SELECTED" };

export const orderReducer = (
  state: OrderState,
  action: OrderAction
): OrderState => {
  switch (action.type) {
    case "UPDATE_IMPORTE":
      return {
        ...state,
        lines: state.lines.map((line) =>
          line.id === action.id ? { ...line, importe: action.importe } : line
        ),
      };
    case "TOGGLE_SELECTED":
      return {
        ...state,
        selectedIds: state.selectedIds.includes(action.id)
          ? state.selectedIds.filter((id) => id !== action.id)
          : [...state.selectedIds, action.id],
      };
    case "VALIDATE_SELECTED":
      return {
        ...state,
        lines: state.lines.map((line) =>
          state.selectedIds.includes(line.id)
            ? { ...line, validated: true }
            : line
        ),
        selectedIds: [],
      };
    case "INVALIDATE_SELECTED":
      return {
        ...state,
        lines: state.lines.map((line) =>
          state.selectedIds.includes(line.id)
            ? { ...line, validated: false }
            : line
        ),
        selectedIds: [],
      };
    default:
      return state;
  }
};