import { useOrder } from "./order-context";
import { HeaderInfo } from "./header-info";
import { OrderSummary } from "./order-summary";

// El Header lee el contexto y pasa a HeaderInfo solo los primitivos estables.
// Aunque Header se repinta al cambiar el estado, HeaderInfo (memo) no lo hace
// porque sus props (numero/proveedor/fecha) no cambian.
export const Header = () => {
  const { state } = useOrder();

  return (
    <>
      <HeaderInfo
        numero={state.numero}
        proveedor={state.proveedor}
        fecha={state.fecha}
      />
      <OrderSummary />
    </>
  );
};