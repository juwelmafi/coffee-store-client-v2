import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, photo, price, quantity, _id } = coffee;

  // Delete coffee //

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete from db//
        fetch(`https://coffee-store-server-nine-neon.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your coffee has been deleted.",
          icon: "success",
        });
        // remove coffee from the state //
        const remainingCoffee = coffees.filter(coffee=> coffee._id !== _id);
        setCoffees(remainingCoffee);
      }
    });
  };

  return (
    <div>
      <div className=" bg-base-100 shadow-sm w-full flex justify-between items-center border-2">
        <figure>
          <img src={photo} alt="Movie" className="w-64 h-52 object-cover" />
        </figure>
        <div className="flex justify-around w-full items-center">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="card-actions">
            <div className="join join-vertical space-y-3">
              <Link to={`/coffees/${_id}`}>
                <button className="btn join-item">View</button>
              </Link>
              <Link to={`/update-coffee/${_id}`}>
                <button className="btn join-item">Edit</button>
              </Link>
              <button
                className="btn join-item"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
