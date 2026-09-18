import type { PictureInfo } from "./model";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";

interface Props {
  items: PictureInfo[];
  onConfirm: () => void;
}

export const CheckoutSummary: React.FC<Props> = ({ items, onConfirm }) => (
  <Box>
    <Typography variant="h4" gutterBottom>
      Checkout
    </Typography>
    <Typography gutterBottom>{items.length} imagen(es) en tu pedido:</Typography>
    <List>
      {items.map((picture) => (
        <ListItem key={picture.id} disableGutters>
          <ListItemAvatar>
            <Avatar src={picture.picUrl} alt={picture.title} variant="rounded" />
          </ListItemAvatar>
          <ListItemText primary={picture.title} />
        </ListItem>
      ))}
    </List>
    <Button onClick={onConfirm} variant="contained" color="success">
      Confirmar pedido
    </Button>
  </Box>
);