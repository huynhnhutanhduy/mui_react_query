import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "25px" }}>Home Page</h1>
        <Stack direction="row" justifyContent="space-around" alignItems="center">
          <Link to="/react-query" style={{ textDecoration: "none" }}>
            <Button variant="contained">With React Query</Button>
          </Link>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <Button variant="contained">Create A Post</Button>
          </Link>
          <Link to="/react-effect" style={{ textDecoration: "none" }}>
            <Button variant="contained">With useEffect Hook</Button>
          </Link>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
