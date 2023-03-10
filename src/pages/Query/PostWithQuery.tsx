import { Box, Button, Chip, Container, Skeleton, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import http from "../../utils/http";
import { Data } from "../../types/data.type";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDelete } from "../../hooks/delete-post/useDelete";
import { useState } from "react";

const PostWithQuery: React.FC = () => {
  const [id, setId] = useState<number>(0);
  const effect = false;
  const handleDelete = useDelete(id, effect);

  const fetchApi = async () => {
    // const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // const response = await axios.get("http://localhost:3001/posts");
    const response = await http.get<Data[]>("posts");
    return response.data;
  };

  const { isError, isLoading, data } = useQuery(["posts"], fetchApi, { retry: false });
  // console.log(isError, isLoading, data);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   return <p>Error :(</p>;
  // }

  const handleClick: (id: number) => void = (id: number) => {
    setId(id);
    handleDelete(id);
  };

  return (
    <div>
      <Container sx={{ textAlign: "center" }}>
        <h1 style={{ margin: "20px 0" }}>With React Query</h1>
        <Stack direction="row" justifyContent="space-around" alignItems="center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained">Home</Button>
          </Link>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <Button variant="contained">Create A Post</Button>
          </Link>
          <Link to="/react-effect" style={{ textDecoration: "none" }}>
            <Button variant="contained">With useEffect Hook</Button>
          </Link>
        </Stack>
        <Stack spacing={2} sx={{ my: 2 }}>
          {isLoading && (
            <Box>
              <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
              <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
              <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
              <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
              <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
            </Box>
          )}
          {isError && (
            <Chip
              label="Request Failed..."
              sx={{ width: "100%", fontWeight: "bold", fontSize: "19px", color: "red" }}
            ></Chip>
          )}
          {data &&
            data.map((item: Data) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Chip label={item.title} sx={{ width: "100%" }}></Chip>
                <DeleteForeverIcon
                  cursor="pointer"
                  onClick={() => handleClick(item.id)}
                  sx={{ color: "red", fontSize: "35px" }}
                />
              </div>
            ))}
        </Stack>
      </Container>
    </div>
  );
};

export default PostWithQuery;
