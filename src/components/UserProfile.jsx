import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UserProfile = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:4000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const reaminingUsers = users.filter(user => user._id !== id);
              setUsers(reaminingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <h2 className="text-3xl font-bold text-center">Users : {users.length}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>More Information</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.email}</div>
                  </div>
                </div>
              </td>
              <td>
                {user.address}
                <br />
                <span className="badge badge-ghost badge-sm">{user.phone}</span>
              </td>
              <td>{user.lastSignInTime}</td>
              <th className="space-x-2">
                <button
                  className="btn btn-xs"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
                <button className="btn btn-xs">Details</button>
                <button className="btn btn-xs">Edit</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserProfile;
