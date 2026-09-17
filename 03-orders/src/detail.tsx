import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Checkbox,
  TextField,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import { useOrder } from "./order-context";

export const Detail = () => {
  const { state, dispatch } = useOrder();
  const noneSelected = state.selectedIds.length === 0;

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Button
          variant="outlined"
          disabled={noneSelected}
          onClick={() => dispatch({ type: "VALIDATE_SELECTED" })}
        >
          Validar
        </Button>
        <Button
          variant="outlined"
          disabled={noneSelected}
          onClick={() => dispatch({ type: "INVALIDATE_SELECTED" })}
        >
          Invalidar
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell>Estado</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Importe</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.lines.map((line) => {
              const selected = state.selectedIds.includes(line.id);
              return (
                <TableRow key={line.id} selected={selected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selected}
                      onChange={() =>
                        dispatch({ type: "TOGGLE_SELECTED", id: line.id })
                      }
                    />
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
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE_IMPORTE",
                          id: line.id,
                          importe: Number(e.target.value),
                        })
                      }
                      sx={{ width: 120 }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};