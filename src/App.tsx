import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PostWithEffect from "./pages/Effect/PostWithEffect";
import PostWithQuery from "./pages/Query/PostWithQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Create from "./pages/Create/Create";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react-query" element={<PostWithQuery />} />
            <Route path="/react-effect" element={<PostWithEffect />} />
            <Route path="/create" element={<Create />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
