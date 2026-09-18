import { Box, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  count: number;
  onShow: () => void;
}

export const CartCollapsed: React.FC<Props> = ({ count, onShow }) => (
  <Box sx={{ p: 2, borderLeft: "1px solid #ddd" }}>
    <IconButton onClick={onShow} aria-label="Mostrar carrito">
      <Badge badgeContent={count} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  </Box>
);