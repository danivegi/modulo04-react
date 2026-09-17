import { Stack, Button, Typography } from "@mui/material";

interface Props {
  page: number;
  hasNext: boolean;
  onChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ page, hasNext, onChange }) => (
  <Stack direction="row" spacing={2} sx={{ mt: 2, alignItems: "center" }}>
    <Button variant="outlined" disabled={page <= 1} onClick={() => onChange(page - 1)}>
      Prev
    </Button>
    <Typography>Page {page}</Typography>
    <Button variant="outlined" disabled={!hasNext} onClick={() => onChange(page + 1)}>
      Next
    </Button>
  </Stack>
);