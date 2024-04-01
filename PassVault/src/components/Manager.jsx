import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">Vault/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own PassWord Manager
        </p>

        <div className="text-white flex flex-col p-4 text-black gap-8 items-center">
          <input
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name=""
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name=""
              id=""
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="text"
                name=""
                id=""
              />
              <span className="absolute right-0 top-0">
                <img className="p-1" width={30} src="icons/eye.png" alt="eye" />
              </span>
            </div>
          </div>
          <button className="flex justify-center items-center gap-2 text-black bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
