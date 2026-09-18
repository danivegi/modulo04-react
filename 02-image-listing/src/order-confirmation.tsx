import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export const OrderConfirmation = () => (
  <Box>
    <Typography variant="h4" gutterBottom>
      ¡Pedido realizado!
    </Typography>
    <Typography gutterBottom>Gracias por tu compra.</Typography>
    <Button component={Link} to="/kitties">
      ← Volver a la galería
    </Button>
  </Box>
);