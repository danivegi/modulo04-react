import React from "react";
import type { OrderState } from "./model";
import type { OrderAction } from "./order-reducer";

interface OrderContextValue {
  state: OrderState;
  dispatch: React.Dispatch<OrderAction>;
}

export const OrderContext = React.createContext<OrderContextValue | null>(null);

export const useOrder = () => {
  const context = React.useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};