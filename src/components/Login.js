
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
  const history = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8000/", {
        userid,
        password,
      });
  
      console.log(response.data); // Add this line to inspect the response data
  
      if (response.data === "exist") {
        toast.success("You LoggedIn Successfully!");
        history("/home", { state: { id: userid } });
      } else if (response.data === "not exist") {
        toast.error("Error while logging in.");
      }
    } catch (e) {
      console.log("Error: ", e);
      toast.error("An unexpected error occurred.");
    }
  }

  return (
    <>
      <div className=" mt-10 gap-10 ">
        <div className="text-center">
        <p className="text-3xl font-bold">Login Page</p>
        </div>
        
        <br />
        <form action="POST" onSubmit={handleSubmit} className="">
          <input
            type="text"
            onChange={(e) => setUserid(e.target.value)}
            placeholder="UserId"
            className="mx-10 p-2 border-2 border-black rounded-md my-10"
          /><br/>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mx-10 p-2 border-2   border-black rounded-md my-5"
          />
          <input type="submit" value="Login" className="bg-blue-400 hover:bg-blue-500 p-3 cursor-pointer mx-2 border rounded-full" />
        </form>
        <div className="mx-10 my-5"><ReCAPTCHA
        sitekey="6LfAZOspAAAAAOPu4kTBOAJTqSf-HmzVSicKoUGL"
        /></div>
        <ToastContainer position="top-right" />
        <br />
        <div className="text-center text-xl">
        <p>or</p>
        <Link to="/signup" className="font-bold text-red-500">Signup</Link>
        </div>
      </div>
    </>
  );
}

export default Login;


