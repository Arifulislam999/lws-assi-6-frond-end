import { axiosInstance } from "../../utils/axios";

export const saveAPI = async (id) => {
  const response = await axiosInstance.patch(`/blogs/${id}`, {
    isSaved: true,
  });
  return response.data;
};
