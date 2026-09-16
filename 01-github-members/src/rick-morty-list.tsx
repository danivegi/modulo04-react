import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useDebounce } from "./use-debounce";

interface CharacterEntity {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

export const RickMortyListPage: React.FC = () => {
  const [search, setSearch] = React.useState("");
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

  const debouncedSearch = useDebounce(search, 500);

  React.useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
        debouncedSearch
      )}`
    )
      .then((response) => response.json())
      .then((json) => setCharacters(json.results ?? []));
  }, [debouncedSearch]);

  return (
    <Container sx={{ py: 4 }}>
      <Button component={RouterLink} to="/list" sx={{ mb: 2 }}>
        ← GitHub members
      </Button>

      <Typography variant="h4" gutterBottom>
        Rick &amp; Morty characters
      </Typography>

      <TextField
        fullWidth
        size="small"
        label="Search character..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      {characters.length === 0 ? (
        <Typography>No characters found.</Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 2,
          }}
        >
          {characters.map((character) => (
            <Card key={character.id}>
              <CardActionArea
                component={RouterLink}
                to={`/rick-morty/${character.id}`}
              >
                <CardMedia
                  component="img"
                  image={character.image}
                  alt={character.name}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="center">
                    {character.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
};