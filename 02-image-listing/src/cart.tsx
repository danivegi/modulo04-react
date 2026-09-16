import React from "react";
import { Link } from "react-router-dom";
import type { PictureInfo } from "./model";
import { allPictures } from "./model";
import { useCart } from "./cart-context";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Badge,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

export const Cart = () => {
  const { cartIds, removeFromCart, clearCart } = useCart();
  const [visible, setVisible] = React.useState(true);

  const items = cartIds
    .map((id) => allPictures.find((picture) => picture.id === id))
    .filter((picture): picture is PictureInfo => Boolean(picture));

  if (!visible) {
    return (
      <Box sx={{ p: 2, borderLeft: "1px solid #ddd" }}>
        <IconButton onClick={() => setVisible(true)} aria-label="Mostrar carrito">
          <Badge badgeContent={items.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>
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
              <ListItem
                key={picture.id}
                disableGutters
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={() => removeFromCart(picture.id)}
                    aria-label={`Remove ${picture.title}`}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    src={picture.picUrl}
                    alt={picture.title}
                    variant="rounded"
                  />
                </ListItemAvatar>
                <ListItemText primary={picture.title} />
              </ListItem>
            ))}
          </List>

          <Stack spacing={1} sx={{ mt: 1 }}>
            <Button component={Link} to="/checkout" variant="contained">
              Ver pedido
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