import React, { useContext } from "react";
import { AuthContext } from "../constext/AuthContext";

const SignIn = () => {
  const {logInUser} = useContext(AuthContext);
  const handleSignin = (e)=>{
    e.preventDefault();
    // console.log("sing in clicked")
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password)
    logInUser(email, password)
    .then(result=> {
      // console.log(result.user)
    
      // update last sign in to db //
      const singInInfo = {
        email,
        lastSignInTime: result.user?.metadata?.lastSignInTime,
      }

      fetch('https://coffee-store-server-nine-neon.vercel.app/users', {
        method: "PATCH",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(singInInfo)
      })
      .then(res=> res.json())
      .then(()=> {
        // console.log('data afer update', data)
      })


    })
    .catch(error => {
      console.log(error.code)
    })
  }
  return (
   <div className="max-w-6xl min-h-full mx-auto">
     <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-24">
      <h1 className="text-4xl font-bold text-center py-3">Signin now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="email"/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name="password"/>
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
