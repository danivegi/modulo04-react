import React from "react";
import { Box, TextField } from "@mui/material";

interface Props {
  numero: string;
  proveedor: string;
  fecha: string;
}

// React.memo: como estos datos no cambian, este componente NO se repinta
// cuando editas un importe (que sí cambia total y estado). Mira la consola:
// "render HeaderInfo" solo aparece al montar, no en cada edición.
export const HeaderInfo: React.FC<Props> = React.memo(
  ({ numero, proveedor, fecha }) => {
    console.log("render HeaderInfo");
    return (
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField
          label="Número"
          value={numero}
          size="small"
          slotProps={{ input: { readOnly: true } }}
        />
        <TextField
          label="Proveedor"
          value={proveedor}
          size="small"
          slotProps={{ input: { readOnly: true } }}
        />
        <TextField
          label="Fecha"
          value={fecha}
          size="small"
          slotProps={{ input: { readOnly: true } }}
        />
      </Box>
    );
  }
);