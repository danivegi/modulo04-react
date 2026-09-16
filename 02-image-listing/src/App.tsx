import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import { CssBaseline, Box, Button } from "@mui/material";
import { CartProvider } from "./cart-provider";
import { KittiesPage } from "./kitties";
import { PuppiesPage } from "./puppies";
import { CheckoutPage } from "./checkout";
import { Cart } from "./cart";

function App() {
  return (
    <CartProvider>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          <Box component="main" sx={{ flex: 1, p: 3 }}>
            <Box component="nav" sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Button
                component={NavLink}
                to="/kitties"
                sx={{ "&.active": { fontWeight: "bold" } }}
              >
                Kitties
              </Button>
              <Button
                component={NavLink}
                to="/puppies"
                sx={{ "&.active": { fontWeight: "bold" } }}
              >
                Puppies
              </Button>
            </Box>
            <Routes>
              <Route path="/kitties" element={<KittiesPage />} />
              <Route path="/puppies" element={<PuppiesPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<Navigate to="/kitties" />} />
            </Routes>
          </Box>
          {}
          <Cart />
        </Box>
      </Router>
    </CartProvider>
  );
}

export default App;