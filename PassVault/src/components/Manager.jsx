import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    alert("show the password");
    if (ref.current.src.includes === "icons/eyecross.png") {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/eyecross.png";
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(passwordArray);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">Vault/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own PassWord Manager
        </p>

        <div className="text-black flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="text"
                name="password"
                id=""
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={26}
                  src="icons/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 text-black bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className="passwords">
          <h2>Your Passwords</h2>
          <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-2">Song</th>
                <th className="py-2">Artist</th>
                <th className="py-2">Year</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              <tr>
                <td className="text-center w-32">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className="text-center w-32">Malcolm Lockyer</td>
                <td className="text-center w-32">1961</td>
              </tr>
              <tr>
                <td className="text-center w-32">Witchy Woman</td>
                <td className="text-center w-32">The Eagles</td>
                <td className="text-center w-32">1972</td>
              </tr>
              <tr>
                <td className="text-center w-32">Shining Star</td>
                <td className="text-center w-32">Earth, Wind, and Fire</td>
                <td className="text-center w-32">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Manager;
