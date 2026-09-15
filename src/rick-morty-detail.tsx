import React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

interface CharacterDetailEntity {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
}

export const RickMortyDetailPage: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] =
    React.useState<CharacterDetailEntity | null>(null);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setCharacter(json));
  }, [id]);

  if (!character) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Button component={RouterLink} to="/rick-morty" sx={{ mb: 2 }}>
        ← Back to characters
      </Button>

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
    </Container>
  );
};