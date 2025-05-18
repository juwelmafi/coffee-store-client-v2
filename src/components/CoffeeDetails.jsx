import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  // console.log(coffee);
  const { name, photo, price, quantity, supplier, details } = coffee;
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <img src={photo} alt="" className="w-md"/>
      <div>
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{quantity}</p>
        <h2>{supplier}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default CoffeeDetails;
