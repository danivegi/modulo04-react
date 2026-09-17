import { CssBaseline } from "@mui/material";
import { OrderProvider } from "./order-provider";
import { OrderContainer } from "./order-container";

function App() {
  return (
    <OrderProvider>
      <CssBaseline />
      <OrderContainer />
    </OrderProvider>
  );
}

export default App;