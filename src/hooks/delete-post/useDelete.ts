import { Data } from "../../types/data.type";
import http from "../../utils/http";

export const useDelete = (id: number, check: boolean) => {
  // Remove post -> Delete
  async function deletePost(id: number) {
    try {
      const remove = await http.delete<Data[]>(`posts/${id}`);
      remove.status === 200 &&
        (check
          ? alert("\nYour post has been successfully deleted!\nPlease reload the page.")
          : alert("\nYour post has been successfully deleted!"));
    } catch (err) {
      // console.log(err);
      alert("There was an error while deleting data.");
    }
  }

  const handleDelete = (id: number) => {
    // console.log(id);
    if (window.confirm("Are you sure you want to delete?")) {
      deletePost(id);
    }
  };

  return handleDelete;
};
