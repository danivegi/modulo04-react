import type { Character, CharacterDetail } from "./rick-morty.model";

export const getCharacters = async (search: string): Promise<Character[]> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(
      search
    )}`
  );
  const json = await response.json();
  // Si no hay coincidencias, la API responde { error } sin `results`.
  return json.results ?? [];
};

export const getCharacter = async (id: string): Promise<CharacterDetail> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.json();
};