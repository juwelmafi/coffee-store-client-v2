import React from "react";

const SignIn = () => {
  return (
   <div className="max-w-6xl min-h-full mx-auto">
     <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-24">
      <h1 className="text-4xl font-bold text-center py-3">Signin now!</h1>
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default SignIn;
