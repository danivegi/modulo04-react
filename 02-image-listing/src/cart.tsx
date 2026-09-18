import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./cart-context";
import { useCartItems } from "./use-cart-items";
import {
  Paper,
  Typography,
  IconButton,
  List,
  Button,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { CartItem } from "./cart-item";
import { CartCollapsed } from "./cart-collapsed";

export const Cart = () => {
  const { removeFromCart, clearCart } = useCart();
  const items = useCartItems();
  const [visible, setVisible] = React.useState(true);

  if (!visible) {
    return (
      <CartCollapsed count={items.length} onShow={() => setVisible(true)} />
    );
  }

  return (
    <Paper
      square
      elevation={0}
      sx={{ width: 260, borderLeft: "1px solid #ddd", p: 2 }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          <ShoppingCartIcon fontSize="small" sx={{ mr: 0.5 }} /> Cart
        </Typography>
        <IconButton
          size="small"
          onClick={() => setVisible(false)}
          aria-label="Ocultar carrito"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>

      {items.length === 0 ? (
        <Typography color="text.secondary" sx={{ mt: 2 }}>
          Empty
        </Typography>
      ) : (
        <>
          <List>
            {items.map((picture) => (
              <CartItem
                key={picture.id}
                picture={picture}
                onRemove={removeFromCart}
              />
            ))}
          </List>

          <Stack spacing={1} sx={{ mt: 1 }}>
            <Button component={Link} to="/checkout" variant="contained">
              Checkout →
            </Button>
            <Button onClick={clearCart} color="error" variant="outlined">
              Vaciar carrito
            </Button>
          </Stack>
        </>
      )}
    </Paper>
  );
};