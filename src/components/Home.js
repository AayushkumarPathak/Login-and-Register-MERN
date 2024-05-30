import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
  // const [name, setName] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`${name} is the student of Lovely Professional University, Punjab India. `);
  // }
  const location = useLocation()
  
  return (
    <>
      {/* <div className="h-full w-full bg-gray-500 p-5 flex justify-center flex-col">
        <p className="text-xl text-white">
          Here we can see the concepts of Form, How event is fired through
          onSubmit
        </p>

        <form onSubmit={handleSubmit} className="p-5 mx-10 my-10">
          <label className="text-white ">
            Enter Your Name
            <input
              className="mx-5 my-5 text-black bg-orange-400 p-2 border-black rounded-md"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="submit" className="bg-white text-black p-2 border rounded-md cursor-pointer" />
          </label>
        </form>
        <p>{name} is the student of LPU</p>
      </div> */}
      <div>
        <h2>Hey, {location.state.id} how are you</h2>
      </div>
    </>
  );
}

export default Home;
