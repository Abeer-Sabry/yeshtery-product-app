import { axiosInstance } from "../api/axios";

export const getData = async url => {
  return await axiosInstance.get(url);
};
export const getDataByBrandAndKind = async (url, brand, kind) => {
  return await axiosInstance.get(`/${url}?brand=${brand}&kind=${kind}`);
};
export const getDataById = async (url, id) => {
  return await axiosInstance.get(`/${url}/${id}`);
};
