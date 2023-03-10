import { Box, Button, Chip, Container, Skeleton, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../types/data.type";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDelete } from "../../hooks/delete-post/useDelete";
import { useFetch } from "../../hooks/fetch/useFetch";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const PostWithEffect: React.FC = () => {
  const effect = true;
  const data: Data[] = useFetch();
  const [id, setId] = useState<number>(0);
  const handleDelete = useDelete(id, effect);

  // if (!data.length) {
  //   return <p>Loading...</p>;
  // }

  const handleClick: (id: number) => void = (id: number) => {
    setId(id);
    handleDelete(id);
  };

  return (
    <div>
      <Container sx={{ textAlign: "center" }}>
        <h1 style={{ margin: "20px 0" }}>With useEffect Hook</h1>
        <Stack direction="row" justifyContent="space-around" alignItems="center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained">Home</Button>
          </Link>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <Button variant="contained">Create A Post</Button>
          </Link>
          <Link to="/react-query" style={{ textDecoration: "none" }}>
            <Button variant="contained">With React Query</Button>
          </Link>
        </Stack>
        <Stack spacing={2} sx={{ my: 2 }}>
          {!data.length && (
            <Box>
              <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
              <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
              <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
              <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
              <Skeleton animation="wave" sx={{ width: "100%", height: "50px" }} />
            </Box>
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

export default PostWithEffect;
