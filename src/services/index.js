import { axiosInstance } from "../api/axios";

export const getData = async url => {
  return await axiosInstance.get(url);
};
export const getDataByTitle = async (url, title) => {
  return await axiosInstance.get(`/${url}?title=${title}`);
};
export const updateCart = async (url, id, body) => {
  return await axiosInstance.patch(`/${url}/${id}`, body);
};
