import { useQuery } from "react-query";
import { axiosInstance } from "../api/axios";

export const getData = async url => {
  return await axiosInstance.get(url);
};
export const getDataByTitle = async (url, title) => {
  return await axiosInstance.get(`/${url}?title=${title}`);
};
