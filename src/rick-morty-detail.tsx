import React from "react";
import { Link, useParams } from "react-router-dom";

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
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="nav">
        <Link to="/rick-morty">← Back to characters</Link>
      </div>

      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} width={200} />
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>Gender: {character.gender}</li>
        <li>Origin: {character.origin.name}</li>
        <li>Location: {character.location.name}</li>
      </ul>
    </>
  );
};