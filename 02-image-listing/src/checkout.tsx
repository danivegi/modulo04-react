import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./cart-context";
import { useCartItems } from "./use-cart-items";
import { Box, Typography, Button } from "@mui/material";
import { CheckoutSummary } from "./checkout-summary";
import { OrderConfirmation } from "./order-confirmation";

export const CheckoutPage = () => {
  const { clearCart } = useCart();
  const items = useCartItems();
  const [confirmed, setConfirmed] = React.useState(false);

  const handleConfirm = () => {
    clearCart();
    setConfirmed(true);
  };

  if (confirmed) {
    return <OrderConfirmation />;
  }

  if (items.length === 0) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>
        <Typography gutterBottom>Tu carrito está vacío.</Typography>
        <Button component={Link} to="/kitties">
          ← Volver a la galería
        </Button>
      </Box>
    );
  }

  return <CheckoutSummary items={items} onConfirm={handleConfirm} />;
};