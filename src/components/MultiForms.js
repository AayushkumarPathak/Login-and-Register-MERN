import React, { useState } from "react";

function MultiForms() {
    const [uname,setUname] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Username: ${uname}`)
        

    }
  return (
    <>
      <div className="flex justify-center justify-iteams-center bg-gray-400 h-100 p-20 mx-10 my-10 border rounded-md shadow-lg">
        <div className="flex flex-col justify-between align-middle">
          <form className="" onSubmit={handleSubmit}>
            <input
              placeholder="UserName"
              type="text"
              className="bg-white text-black mx-5 p-2 my-2 border rounded-md shadow-lg "
            />

            <input
              type="text"
              placeholder="Password"
              value={uname}
              className="bg-white text-black mx-5 p-2 my-2 border rounded-md shadow-lg "
              onChange={(ev)=>setPassword(ev.target.value)}
            />

            <input
              placeholder="Email"
              type="text"
              className="bg-white text-black mx-5 p-2 my-2 border rounded-md shadow-lg "
            />
          </form>
          <button
          onClick={handleSubmit}
            type="submit "
            className="bg-yellow-500 cursor-pointer ml-60 border-black shadow-md rounded-md mt-4 h-15 text-xl w-20 p-3 text-black"
          >
            Submit
          </button>
        </div>
        
      </div>
      <div className="flex justify-center text-center flex-col bg-yellow-200 h-100 p-20 mx-10 my-10 border rounded-md shadow-lg">
      <p className="text-xl">Your Credential are</p>
      <p className="text-xl text-black">Username: {uname}</p>
      <p className="text-xl text-black"> Password: {password}</p>
      <p className="text-xl text-black">Email: {email}</p>
      </div>
    </>
  );
}

export default MultiForms;
