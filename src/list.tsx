import React from "react";
import { Link } from "react-router-dom";
import { useOrg } from "./org-context";

const PER_PAGE = 10;

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const { org, setOrg, page, setPage } = useOrg();
  const [filter, setFilter] = React.useState(org);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(
      `https://api.github.com/orgs/${org}/members?per_page=${PER_PAGE}&page=${page}`
    )
      .then((response) => response.json())
      .then((json) => setMembers(Array.isArray(json) ? json : []));
  }, [org, page]);

  const handleSearch = () => {
    setOrg(filter);
    setPage(1); // nueva búsqueda -> volvemos a la primera página
  };

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

      <div className="pagination">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>Page {page}</span>
        {/* Heurística: si recibimos menos de PER_PAGE, no hay página siguiente */}
        <button
          disabled={members.length < PER_PAGE}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};