import React from "react";
import { useQuery } from "react-query";
import { axiosInstance } from "../api/axios";

export const getDataByBrand = async (url, brand) => {
  return await axiosInstance.get(`/${url}?brand=${brand}`);
};

const useFetchDataByBrand = (cacheKey, url, brand) => {
  return useQuery([cacheKey, brand], () => getDataByBrand(url, brand), {
    enabled: !!brand,
  });
};

export default useFetchDataByBrand;
