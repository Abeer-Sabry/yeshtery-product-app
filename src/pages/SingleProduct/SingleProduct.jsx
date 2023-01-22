import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import BrandProducts from "../../components/BrandProducts/BrandProducts";
import useFetchDataWithId from "../../hooks/useFetchDataById";
import { getDataByTitle } from "../../services";

const SingleProduct = () => {
  const { title } = useParams();
  console.log("singleProduct", title);
  const { data, isLoading } = useFetchDataWithId("product", "products", title);
  const [qty, setQty] = useState(data?.data[0].qty);
  // const { data, isFetching, isLoading } = useQuery(
  //   ["singleProduct", title],
  //   getDataByTitle(`products`, title),
  //   {
  //     enabled: !!title,
  //   }
  // );
  console.log("singleData", data);
  console.log("qty", qty);

  const clickHandler = () => {
    setQty(prev => prev + 1);
  };
  const decrementHandler = () => {
    setQty(prev => prev - 1);
  };

  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <>
          {data.data[0].title}
          <button onClick={clickHandler}>add to cart</button>
          <button onClick={decrementHandler}>minus</button>

          <BrandProducts brand={data.data[0].brand} />
        </>
      )}
    </>
  );
};

export default SingleProduct;
