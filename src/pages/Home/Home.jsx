import React from "react";
import { useQuery } from "react-query";
import Products from "../../components/Products/Products";
import { getData } from "../../services";

const Home = () => {
  const { data, isFetching, isLoading } = useQuery(["products"], () => getData("/products"));
  console.log(data);
  return <>{isLoading ? "loading..." : <Products data={data.data} />}</>;
};

export default Home;
