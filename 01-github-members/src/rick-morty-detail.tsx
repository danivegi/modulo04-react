import React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import { getCharacter } from "./rick-morty.api";
import type { CharacterDetail } from "./rick-morty.model";
import { CharacterCard } from "./character-card";

export const RickMortyDetailPage: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] =
    React.useState<CharacterDetail | null>(null);

  React.useEffect(() => {
    if (!id) return;
    getCharacter(id).then(setCharacter);
  }, [id]);

  return (
    <Container sx={{ py: 4 }}>
      <Button component={RouterLink} to="/rick-morty" sx={{ mb: 2 }}>
        ← Back to characters
      </Button>
      {character ? (
        <CharacterCard character={character} />
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Container>
  );
};