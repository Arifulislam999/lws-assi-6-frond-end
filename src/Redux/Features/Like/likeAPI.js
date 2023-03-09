import { axiosInstance } from "../../utils/axios";

export const likeAPI = async ({ id, likes }) => {
  const response = await axiosInstance.patch(`/blogs/${id}`, {
    likes,
  });
  return response.data;
};
