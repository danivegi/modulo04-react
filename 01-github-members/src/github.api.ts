import type { Member } from "./github.model";

export const PER_PAGE = 10;

export const getMembers = async (
  org: string,
  page: number
): Promise<Member[]> => {
  const response = await fetch(
    `https://api.github.com/orgs/${org}/members?per_page=${PER_PAGE}&page=${page}`
  );
  const json = await response.json();
  // GitHub devuelve un objeto (no array) en 403/404: lo blindamos.
  return Array.isArray(json) ? json : [];
};