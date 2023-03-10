import { useEffect, useState } from "react";
import { Data } from "../../types/data.type";
import http from "../../utils/http";

export const useFetch = () => {
  const [data, setData] = useState<Data[]>([]);

  // Fetch post with useEffect -> set data
  const fetchApi = async () => {
    // const response = await http.get<Data[]>();
    // const response = await axios.get("http://localhost:3001/posts");
    try {
      const response = await http.get<Data[]>("posts");
      const data: Data[] = await response.data;
      // console.log(data);
      setData(data);
    } catch (err) {
      // console.log(err);
      alert("There was an error while deleting data.");
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return data;
};
