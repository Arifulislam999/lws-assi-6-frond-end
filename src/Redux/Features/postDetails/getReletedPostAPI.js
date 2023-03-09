import { axiosInstance } from "../../utils/axios";
import { generateQueryString } from "../../utils/queryString";

export const getReletedPostAPI = async ({ id, tags }) => {
  const qString = generateQueryString({ id, tags });
  // console.log(qString);
  const response = await axiosInstance.get(`/blogs?${qString}`);
  return response.data;
};
