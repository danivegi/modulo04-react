import React from "react";
import { OrderContext } from "./order-context";
import { orderReducer } from "./order-reducer";
import { initialOrder } from "./model";

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(orderReducer, initialOrder);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};