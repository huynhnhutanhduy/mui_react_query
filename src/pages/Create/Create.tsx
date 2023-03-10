import { Button, Container, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useCreate } from "../../hooks/create-post/useCreate";

const Create: React.FC = () => {
  const { addPost, title, setTitle } = useCreate("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addPost(title);
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <h1 style={{ margin: "20px 0" }}>Create A Post</h1>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained">Home</Button>
        </Link>
        <Link to="/react-query" style={{ textDecoration: "none" }}>
          <Button variant="contained">With React Query</Button>
        </Link>
        <Link to="/react-effect" style={{ textDecoration: "none" }}>
          <Button variant="contained">With useEffect Hook</Button>
        </Link>
      </Stack>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack alignItems="center" spacing={4}>
          <h3 style={{ marginTop: "100px" }}>Fill out the information for this form</h3>
          <TextField
            id="outlined-basic"
            label="Information"
            variant="outlined"
            sx={{ width: "500px" }}
            value={title}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Create;
