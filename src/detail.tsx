import React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Id: {id}
      </Typography>
      <Button component={RouterLink} to="/list">
        Back to list page
      </Button>
    </Container>
  );
};