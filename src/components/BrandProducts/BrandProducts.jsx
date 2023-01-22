import React from "react";
import useFetchDataByBrand from "../../hooks/useFetchDataByBrand";

const BrandProducts = ({ brand }) => {
  const { data, isLoading } = useFetchDataByBrand("productBrand", "products", brand);
  console.log("brandData", data);

  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <div>
          {data.data.map(item => (
            <div key={item.id}>
              <img style={{ width: "70px", height: "70px" }} src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BrandProducts;
