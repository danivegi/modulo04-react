import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import { useOrg } from "./org-context";
import { getMembers, PER_PAGE } from "./github.api";
import type { Member } from "./github.model";
import { MemberFilter } from "./member-filter";
import { MemberTable } from "./member-table";
import { Pagination } from "./pagination";

export const ListPage: React.FC = () => {
  const { org, setOrg, page, setPage } = useOrg();
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers(org, page).then(setMembers);
  }, [org, page]);

  const handleSearch = (newOrg: string) => {
    setOrg(newOrg);
    setPage(1); // nueva búsqueda -> primera página
  };

  return (
    <Container sx={{ py: 4 }}>
      <Button component={RouterLink} to="/rick-morty" sx={{ mb: 2 }}>
        Rick &amp; Morty →
      </Button>

      <Typography variant="h4" gutterBottom>
        GitHub members
      </Typography>

      <MemberFilter initialValue={org} onSearch={handleSearch} />
      <MemberTable members={members} />
      <Pagination
        page={page}
        hasNext={members.length === PER_PAGE}
        onChange={setPage}
      />
    </Container>
  );
};