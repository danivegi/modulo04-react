import { Box, Typography } from "@mui/material";
import { Header } from "./header";
import { Detail } from "./detail";

export const OrderContainer = () => {
  return (
    <Box sx={{ maxWidth: 820, mx: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Pedido a proveedor
      </Typography>
      <Header />
      <Box sx={{ mt: 3 }}>
        <Detail />
      </Box>
    </Box>
  );
};