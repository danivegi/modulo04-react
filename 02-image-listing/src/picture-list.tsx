import type { PictureInfo } from "./model";
import { useCart } from "./cart-context";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

interface Props {
  pictures: PictureInfo[];
}

export const PictureList: React.FC<Props> = ({ pictures }) => {
  const { cartIds, addToCart, removeFromCart } = useCart();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 3,
      }}
    >
      {pictures.map((picture) => {
        const selected = cartIds.includes(picture.id);
        return (
          <Card key={picture.id}>
            <CardMedia
              component="img"
              image={picture.picUrl}
              alt={picture.title}
              sx={{ height: 180, objectFit: "contain", p: 1 }}
            />
            <CardContent>
              <Typography variant="subtitle1">{picture.title}</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selected}
                    onChange={(e) =>
                      e.target.checked
                        ? addToCart(picture.id)
                        : removeFromCart(picture.id)
                    }
                  />
                }
                label="Buy"
              />
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};