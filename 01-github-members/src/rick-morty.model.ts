export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

export interface CharacterDetail {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
}