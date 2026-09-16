import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Avatar,
  Link,
} from "@mui/material";
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
    setPage(1);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Button component={RouterLink} to="/rick-morty" sx={{ mb: 2 }}>
        Rick &amp; Morty →
      </Button>

      <Typography variant="h4" gutterBottom>
        GitHub members
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <TextField
          size="small"
          label="Organization"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <Avatar src={member.avatar_url} alt={member.login} />
                </TableCell>
                <TableCell>{member.id}</TableCell>
                <TableCell>
                  <Link component={RouterLink} to={`/detail/${member.login}`}>
                    {member.login}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction="row" spacing={2} sx={{ mt: 2, alignItems: "center" }}>
        <Button
          variant="outlined"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        <Typography>Page {page}</Typography>
        <Button
          variant="outlined"
          disabled={members.length < PER_PAGE}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Stack>
    </Container>
  );
};