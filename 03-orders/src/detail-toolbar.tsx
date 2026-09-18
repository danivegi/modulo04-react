import { Stack, Button } from "@mui/material";

interface Props {
  disabled: boolean;
  onValidate: () => void;
  onInvalidate: () => void;
}

export const DetailToolbar: React.FC<Props> = ({
  disabled,
  onValidate,
  onInvalidate,
}) => (
  <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
    <Button variant="outlined" disabled={disabled} onClick={onValidate}>
      Validar
    </Button>
    <Button variant="outlined" disabled={disabled} onClick={onInvalidate}>
      Invalidar
    </Button>
  </Stack>
);