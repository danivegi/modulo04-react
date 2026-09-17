import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import type { CharacterDetail } from "./rick-morty.model";

interface Props {
  character: CharacterDetail;
}

export const CharacterCard: React.FC<Props> = ({ character }) => (
  <Card sx={{ maxWidth: 400 }}>
    <CardMedia component="img" image={character.image} alt={character.name} />
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {character.name}
      </Typography>
      <Typography>Status: {character.status}</Typography>
      <Typography>Species: {character.species}</Typography>
      <Typography>Gender: {character.gender}</Typography>
      <Typography>Origin: {character.origin.name}</Typography>
      <Typography>Location: {character.location.name}</Typography>
    </CardContent>
  </Card>
);