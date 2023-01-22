import { useQuery } from "react-query";
import { axiosInstance } from "../api/axios";

export const getDataByTitle = async (url, title) => {
  return await axiosInstance.get(`/${url}?title=${title}`);
};
const useFetchDataWithId = (cacheKey, urlPtah, title) => {
  return useQuery([cacheKey, title], () => getDataByTitle(urlPtah, title), {
    enabled: !!title,
  });
};

export default useFetchDataWithId;
