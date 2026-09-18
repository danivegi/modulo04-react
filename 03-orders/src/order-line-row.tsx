import { TableRow, TableCell, Checkbox, Chip, TextField } from "@mui/material";
import type { OrderLine } from "./model";

interface Props {
  line: OrderLine;
  selected: boolean;
  onToggleSelect: (id: string) => void;
  onUpdateImporte: (id: string, importe: number) => void;
}

export const OrderLineRow: React.FC<Props> = ({
  line,
  selected,
  onToggleSelect,
  onUpdateImporte,
}) => (
  <TableRow selected={selected}>
    <TableCell padding="checkbox">
      <Checkbox checked={selected} onChange={() => onToggleSelect(line.id)} />
    </TableCell>
    <TableCell>
      <Chip
        label={line.validated ? "Válido" : "Pendiente"}
        color={line.validated ? "success" : "default"}
        size="small"
      />
    </TableCell>
    <TableCell>{line.description}</TableCell>
    <TableCell>
      <TextField
        type="number"
        size="small"
        value={line.importe}
        onChange={(e) => onUpdateImporte(line.id, Number(e.target.value))}
        sx={{ width: 120 }}
      />
    </TableCell>
  </TableRow>
);