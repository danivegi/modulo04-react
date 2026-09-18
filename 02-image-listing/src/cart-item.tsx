import type { PictureInfo } from "./model";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  picture: PictureInfo;
  onRemove: (id: string) => void;
}

export const CartItem: React.FC<Props> = ({ picture, onRemove }) => (
  <ListItem
    disableGutters
    secondaryAction={
      <IconButton
        edge="end"
        onClick={() => onRemove(picture.id)}
        aria-label={`Remove ${picture.title}`}
      >
        <DeleteIcon />
      </IconButton>
    }
  >
    <ListItemAvatar>
      <Avatar src={picture.picUrl} alt={picture.title} variant="rounded" />
    </ListItemAvatar>
    <ListItemText primary={picture.title} />
  </ListItem>
);