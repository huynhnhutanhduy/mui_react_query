import React from "react";
import { Data } from "../../types/data.type";
import http from "../../utils/http";

export const useCreate = (post: string) => {
  const [title, setTitle] = React.useState(post);

  // Add post -> Create
  async function addPost(post: string) {
    try {
      const res = await http.get<Data[]>("posts");
      const id: number = res.data.length + 1;
      const data = await http.post<Data[]>("posts", {
        id: id,
        title: post,
      });
      // console.log(data);
      // console.log(data.data);
      setTitle("");
      if (data.status === 201) alert("Your post has been successfully created!");
    } catch (err) {
      setTitle(title);
      if (err) alert("There was an error while creating data.");
    }
  }

  return { addPost, title, setTitle };
};
