import React from "react";
import { Link } from "react-router-dom";
import type { PictureInfo } from "./model";
import { allPictures } from "./model";
import { useCart } from "./cart-context";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";

export const CheckoutPage = () => {
  const { cartIds, clearCart } = useCart();
  const [confirmed, setConfirmed] = React.useState(false);

  const items = cartIds
    .map((id) => allPictures.find((picture) => picture.id === id))
    .filter((picture): picture is PictureInfo => Boolean(picture));

  const handleConfirm = () => {
    clearCart();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          ¡Pedido realizado con éxito!
        </Typography>
        <Typography gutterBottom>Gracias por tu compra.</Typography>
        <Button component={Link} to="/kitties">
          ← Volver a la galería
        </Button>
      </Box>
    );
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

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Typography gutterBottom>{items.length} imagen(es) en tu pedido:</Typography>
      <List>
        {items.map((picture) => (
          <ListItem key={picture.id} disableGutters>
            <ListItemAvatar>
              <Avatar src={picture.picUrl} alt={picture.title} variant="rounded" />
            </ListItemAvatar>
            <ListItemText primary={picture.title} />
          </ListItem>
        ))}
      </List>
      <Button onClick={handleConfirm} variant="contained" color="success">
        Confirmar pedido
      </Button>
    </Box>
  );
};