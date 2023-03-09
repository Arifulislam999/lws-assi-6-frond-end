import { axiosInstance } from "../../utils/axios";

export const getPostAPI = async () => {
  const response = await axiosInstance.get("/blogs");
  return response.data;
};
