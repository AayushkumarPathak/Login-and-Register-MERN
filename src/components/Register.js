import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const history  = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/signup", {
          userid,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            // alert("user already exists")
            toast.error("User already exists");
            // history("/home", { state: { id: userid } });
          } else if (res.data === "not exist") {
            // alert("User not sign up , you need to sign up first .");
            // alert("Signed up successfully. Kindly login.");
            toast.success("Signed up successfully, login now!")
            history("/", { state: { id: userid } });
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log("Error: ", e);
    }
  }
  return (
    <>
      <div>
        Signup Page
        <br />
        <form action="POST">
          <input
            type="text"
            onChange={(e) => {
              setUserid(e.target.value);
            }}
            name=""
            id=""
            placeholder="UserId"
          ></input>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name=""
            id=""
            placeholder="Password"
          ></input>
          <input type="submit" onClick={handleSubmit}/>
        </form>
        <ToastContainer position="top-right"/>
        <br />
        <p> or</p>
        <Link to="/">
          Login
        </Link>
      </div>
    </>
  );
}

export default Register;
