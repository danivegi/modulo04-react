import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";
import { useOrder } from "./order-context";
import { DetailToolbar } from "./detail-toolbar";
import { OrderLineRow } from "./order-line-row";

export const Detail = () => {
  const { state, dispatch } = useOrder();
  const noneSelected = state.selectedIds.length === 0;

  return (
    <>
      <DetailToolbar
        disabled={noneSelected}
        onValidate={() => dispatch({ type: "VALIDATE_SELECTED" })}
        onInvalidate={() => dispatch({ type: "INVALIDATE_SELECTED" })}
      />

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
            {state.lines.map((line) => (
              <OrderLineRow
                key={line.id}
                line={line}
                selected={state.selectedIds.includes(line.id)}
                onToggleSelect={(id) =>
                  dispatch({ type: "TOGGLE_SELECTED", id })
                }
                onUpdateImporte={(id, importe) =>
                  dispatch({ type: "UPDATE_IMPORTE", id, importe })
                }
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};