import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import Message from "../components/Message";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const submithandler = (e) => {
    e.preventDefault();
  };

  return (
  <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition shadow-md"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileScreen;
