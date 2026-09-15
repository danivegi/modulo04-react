import React from "react";
import { Link } from "react-router-dom";
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
      // Si no hay coincidencias, la API responde  "error"
      .then((json) => setCharacters(json.results ?? []));
  }, [debouncedSearch]);

  return (
    <>
      <div className="nav">
        <Link to="/list">← GitHub members</Link>
      </div>

      <h2>Rick & Morty characters</h2>

      <div className="filter">
        <input
          placeholder="Search character..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {characters.length === 0 ? (
        <p>No characters found.</p>
      ) : (
        <div className="rm-list">
          {characters.map((character) => (
            <Link
              key={character.id}
              to={`/rick-morty/${character.id}`}
              className="rm-card"
            >
              <img src={character.image} alt={character.name} />
              <span>{character.name}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};