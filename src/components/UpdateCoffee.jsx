import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, photo, price, quantity, supplier, details, taste, _id } =
    coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    // console.log(updatedCoffee);

    // update coffee of db //

    fetch(`https://coffee-store-server-nine-neon.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee updated successfuly!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="w-7xl mx-auto h-screen">
      <h2 className="font-thin text-5xl text-center my-10">Update coffee!</h2>
      <form className="w-[80%] mx-auto" onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Coffee Name"
              name="name"
              defaultValue={name}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Quantity"
              name="quantity"
              defaultValue={quantity}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Supplier Name"
              name="supplier"
              defaultValue={supplier}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Taste Name"
              name="taste"
              defaultValue={taste}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Price"
              name="price"
              defaultValue={price}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Coffee Details"
              name="details"
              defaultValue={details}
            />
          </fieldset>
        </div>
        <fieldset className="fieldset my-5 bg-base-200 border-base-300 rounded-box w-full border p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Photo URL"
            name="photo"
            defaultValue={photo}
          />
        </fieldset>
        <input type="submit" value="Update Coffee" className="btn p-2 w-full" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
