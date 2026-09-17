import React from "react";
import { TextField, Button, Stack } from "@mui/material";

interface Props {
  initialValue: string;
  onSearch: (org: string) => void;
}

export const MemberFilter: React.FC<Props> = ({ initialValue, onSearch }) => {
  // "filter" es el borrador que se teclea; se inicializa con la org activa
  // (así al volver del detalle el input mantiene lo que se había buscado).
  const [filter, setFilter] = React.useState(initialValue);

  return (
    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
      <TextField
        size="small"
        label="Organization"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(filter)}
      />
      <Button variant="contained" onClick={() => onSearch(filter)}>
        Search
      </Button>
    </Stack>
  );
};