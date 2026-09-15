import React from "react";
import { Link } from "react-router-dom";
import { useOrg } from "./org-context";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  // La org "activa" (la ya buscada) vive en el Context -> sobrevive al navegar
  // al detalle y volver. El input tiene su propio estado local (el borrador).
  const { org, setOrg } = useOrg();
  const [filter, setFilter] = React.useState(org);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}/members`)
      .then((response) => response.json())
      // Si GitHub responde 403/404 devuelve un objeto (no un array): lo blindamos.
      .then((json) => setMembers(Array.isArray(json) ? json : []));
  }, [org]);

  const handleSearch = () => setOrg(filter);

  return (
    <>
      <h2>GitHub members</h2>

      <div className="filter">
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};