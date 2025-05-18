import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    // console.log(newCoffee);

    // add coffee to db

    fetch("https://coffee-store-server-nine-neon.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("data aise");
          Swal.fire({
            title: "Good job!",
            text: "Coffee added successfuly!",
            icon: "success",
          });
          // form.reset();
        }
      });
  };
  return (
    <div className="w-7xl mx-auto h-screen">
      <h2 className="font-thin text-5xl text-center my-5">Add coffee!</h2>
      <p className="font-thin text-center text-xs mb-10 w-[70%] mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quod distinctio tempora consequatur maiores placeat. Illum laborum saepe modi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis suscipit libero nam aliquam quam, veritatis tempore aut magnam aliquid dolor facere quos quis rem placeat hic nemo, voluptates error consequuntur vitae vero. Nisi dolores cumque fugit eaque officiis expedita eveniet tempora possimus? Veniam aliquid reiciendis ab facere dolore molestiae!</p>
      <form className="w-[80%] mx-auto" onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Coffee Name"
              name="name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Quantity"
              name="quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Supplier Name"
              name="supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Taste Name"
              name="taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Price</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Price"
              name="price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box full border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Coffee Details"
              name="details"
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
          />
        </fieldset>
        <input type="submit" value="Add Coffee" className="btn p-2 w-full" />
      </form>
    </div>
  );
};

export default AddCoffee;
