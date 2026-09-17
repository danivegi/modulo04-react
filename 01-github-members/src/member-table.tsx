import { Link as RouterLink } from "react-router-dom";
import {
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
import type { Member } from "./github.model";

interface Props {
  members: Member[];
}

export const MemberTable: React.FC<Props> = ({ members }) => (
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
);