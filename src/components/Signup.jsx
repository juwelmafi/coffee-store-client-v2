import React, { useContext } from "react";
import { AuthContext } from "../constext/AuthContext";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  // signup //
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    console.log(email, password, userProfile);
    createUser(email, password)
      .then((result) => {
        console.log(result);

        // save profile info in db //

        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after profile save", data);
            Swal.fire({
              title: "Good job!",
              text: "Coffee added successfuly!",
              icon: "success",
            });
          });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div className="max-w-6xl min-h-full mx-auto">
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-24">
        <h1 className="text-4xl font-bold text-center py-3">Signup now!</h1>
        <div className="card-body">
          <form className="fieldset" onSubmit={handleSignUp}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
            />
            <label className="label">Address</label>
            <input
              type="text"
              className="input"
              placeholder="Address"
              name="address"
            />
            <label className="label">Phone</label>
            <input
              type="text"
              className="input"
              placeholder="Phone"
              name="phone"
            />
            <label className="label">Photo</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              name="photo"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            <button className="btn btn-neutral mt-4">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
