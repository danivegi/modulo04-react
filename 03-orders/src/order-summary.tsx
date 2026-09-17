import { Box, TextField, Button, Typography, LinearProgress } from "@mui/material";
import { useOrder } from "./order-context";
import { getTotal, getValidatedPercentage, getCanSend } from "./selectors";

export const OrderSummary = () => {
  const { state } = useOrder();

  // Campos calculados, derivados en el render.
  const total = getTotal(state.lines);
  const percentage = getValidatedPercentage(state.lines);
  const canSend = getCanSend(state.lines);

  const handleSend = () => {
    alert("¡Pedido enviado!");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3, mt: 2, flexWrap: "wrap" }}>
      <TextField
        label="Importe Total"
        value={`${total} €`}
        size="small"
        slotProps={{ input: { readOnly: true } }}
      />
      <Box sx={{ minWidth: 160 }}>
        <Typography variant="body2">Estado: {percentage}%</Typography>
        <LinearProgress variant="determinate" value={percentage} />
      </Box>
      <Button variant="contained" disabled={!canSend} onClick={handleSend}>
        Enviar
      </Button>
    </Box>
  );
};